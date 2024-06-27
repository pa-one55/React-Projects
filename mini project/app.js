const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const { render } = require('ejs');

app.set("view engine", "ejs");
app.use(express.json() );
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());


app.get('/', (req,res) => {
    res.render("index");
} );

app.get('/login', (req,res) => {
    res.render("login");
} );

app.get('/profile', isLoggedIn, async (req,res) => {
    let user = await userModel.findOne({email : req.user.email}).populate("post");
    // console.log(user);
    // user.populate("post");  // 'post' not 'posts'  yaha nhi karte ye
    res.render("profile",{user});
} );

app.post('/post', isLoggedIn, async (req,res) => {
    let user = await userModel.findOne({email : req.user.email});
    let {content} = req.body; // using below to create a new post with the given content
    let post = await postModel.create({
        user : user._id, // create ho rhe user me logged in waale user ka id jaa rha hai
        content // content : content, - alternate syntax
    });
    user.post.push(post._id); // NOTE : its "post" not "posts" , singular
    await user.save();
    console.log(post);
    res.redirect("/profile");
} );



app.post('/register', async (req,res) =>{
    let {email, password, username, name, age } = req.body;
    // check if the user already exists
    let user = await userModel.findOne({email}); // trynna find old user
    if( user ) return res.status(500).send("User already exists");
    // else - create account 
    bcrypt.genSalt(10, (err, salt) => {
        // console.log(salt);
        bcrypt.hash(password,salt, async (err,hash) => {
            // console.log(hash) // yaha tk to thik hai
            let user = await userModel.create({
                username,
                email,
                age,
                name,
                password : hash
            });
            let token = jwt.sign({email:email, userid : user._id}, "secretKey");
            res.cookie("token", token);
            res.send("user registered");
        })
    } )
})

app.post('/login', async (req,res) =>{
    let {email, password } = req.body;
    // check if the user already exists
    let user = await userModel.findOne({email}); // trynna find old user

    if( !user ) return res.status(500).send("User doesn't exists"); // or something went wrong
    // else - user exists
    // step - 1
    // check password - thats done by bcrypt -> syntx - (new_pass, old_pass, function(){} )
    bcrypt.compare(password, user.password, function( err, result ){ 
        if( result ) {
            let token = jwt.sign({email:email, userid : user._id}, "secretKey");
            res.cookie("token", token);
            res.status(200).redirect("/profile");
        }
        else res.redirect("/login");
    })
})

app.get('/logout', (req,res) => {
    res.cookie("token", ""); // token set to blank, deleted basically
    res.redirect("login");
} );


function isLoggedIn(req,res,next){
    if( req.cookies.token === "" ) res.redirect("/login");
    else{
        let data = jwt.verify(req.cookies.token, "secretKey");
        req.user = data; // made a new field 'user' and put the data in there
        next();
    }
    // console.log(req.cookie);
}

const PORT= 3000;

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
  });