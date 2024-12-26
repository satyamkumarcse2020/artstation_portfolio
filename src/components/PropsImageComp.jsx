import React, { useState } from 'react'
import ProfileNav from './profileNav';
import './props.css';

import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { video } from 'motion/react-client';
import { div } from 'motion/react-m';



function PropsImageComp(props) {
const navigate=useNavigate();



function handleClick(){


navigate(props.navigatePath,{state:props.img?props.img:''})
}


    const [hover,setHover]=useState(true);
    const isVideo=props.coverPic.endsWith('.mp4')|| props.coverPic.endsWith('.mov')

    function handleHover(){
        setHover(!hover)
    }

  return (
    <>

    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='mainProDiv flex overflow-hidden'>

       <div onClick={handleClick} className='image cursor-pointer opacity-1 hover:opacity-80 m-auto  transition-all duration-[0.3s] ease-linear w-full h-full'
       >
        {isVideo?
        (
          <video  src={props.coverPic} 
          className="w-full h-full object-cover" loop 
          muted autoPlay ></video>
        )
      :(
      <div  style={{backgroundImage:`url(${props.coverPic})`,backgroundSize:'cover',backgroundRepeat:'no-repeat', backgroundPosition:'center', width: '100%',
      height: '100%'}}>

      </div>)
      }
    
        <div className='pfOnImg'><ProfileNav/>
      </div>
  </div>


    </div>


    
  
    </>
  )
}

export default PropsImageComp
