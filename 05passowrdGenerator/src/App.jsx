import { useState, useCallback, useEffect  } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNums, setincludeNums] = useState(false)
  const [includeChars, setincludeChars] = useState(false)
  const [password, setPassword] = useState("")

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let nums = "0123456789"
    let chars = "!@#$%^&*_~`"
    if (includeChars) str += chars
    if (includeNums) str += nums
    // now make the password
    for (let i = 1; i <= length; i++) {
      // generate a random int
      // make it come between 0 to str.len()
      // append that char to the pass var
      let ind = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(ind)
    }
    // set the password, make it global basically
    console.log(pass)
    setPassword(pass)

  }, [length, includeNums, includeChars, setPassword])

  // constructor jaisa, call/initialise the fucntion
  useEffect( () =>{
    passGenerator()
  },[length, includeNums, includeChars, setPassword] )

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-black text-white ' >
        <h1 className='text-white text-center my-3'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 ' >
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-black'
            placeholder='password'
            readOnly
          />
          <button 
            className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 rounded-xl border border-gray-300'
            onClick={passGenerator}
          >
            New pass
          </button>
          <button 
            className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 rounded-xl border border-gray-300 ml-2 '
            onClick={() => {
              navigator.clipboard.writeText(password);
              alert('Password copied to clipboard!');
            }}
            >
            Copy pass
          </button>
        </div>
        <div className='flex text-sm gap-x-2' >
          <div className='flex items-center gap-x-1' >
            <input
              type="range"
              min={4}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(event) => { setLength(event.target.value) }}
            />
            <label> Length : {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={includeNums}
              className='cursor-pointer'
              onChange={() => {
                setincludeNums((prev) => !prev);
              }
              }
            />
            <label> Include Digits </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={includeChars}
              className='cursor-pointer'
              onChange={(event) => {
                setincludeChars((prev) => !prev);
              }
              }
            />
            <label> Include Characters </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
