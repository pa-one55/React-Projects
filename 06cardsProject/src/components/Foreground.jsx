import React, {useRef, useState} from 'react'
import Card from './Cards'


function Foreground() { 

  const ref = useRef(null);

  const data = [
    {
      desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", 
      fileSize : "0.9mb", 
      close : false,
      tag : { 
        isOpen : true, 
        tagTitle : "Download Now",
        tagColor : "green",
      }, 
    },
    {
      desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", 
      fileSize : "0.9mb", 
      close : false,
      tag : { 
        isOpen : true, 
        tagTitle : "Download Now",
        tagColor : "green",
      }, 
    },
    {
      desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", 
      fileSize : "0.9mb", 
      close : false,
      tag : { 
        isOpen : false, 
        tagTitle : "Download Now",
        tagColor : "green",
      }, 
    },
    {
      desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", 
      fileSize : "0.9mb", 
      close : true,
      tag : { 
        isOpen : false, 
        tagTitle : "Download Now",
        tagColor : "green",
      }, 
    },
    {
      desc : "Lorem ipsum dolor sit, amet consectetur adipisicing.", 
      fileSize : "0.9mb", 
      close : false,
      tag : { 
        isOpen : true, 
        tagTitle : "Download Now",
        tagColor : "blue",
      }, 
    },
  ];
  return (
    <div ref={ref} className='fiexd top-0 left-0  w-full h-full flex gap-5 flex-wrap p-8' >
        {data.map((item,index) =>(
          <Card data = {item}  reference = {ref} />
        ) )}
    </div>
  )
}

export default Foreground