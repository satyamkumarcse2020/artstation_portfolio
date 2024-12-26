import React, { useState } from 'react'
import About from './About';
import Navbar from './Navbar';
import { Navigate, useNavigate } from 'react-router';


function FloatingBar(props) {
const items=[
    {id:0, name:'PortFolio', path:'/'},
    {id:1, name:'About',path:'/about'}
]

const [currentClick,setCurrentClick]=useState(props.currIn);

function handleClick(id,path){
setCurrentClick(id)
navigate(path)
console.log(id)
console.log(path)
}

const navigate=useNavigate();

  return (

    <>
      <div className="Fltcontainer flex flex-col md:flex-row gap-2 md:gap-4 w-fit p-2 rounded-[20px] bg-white text-black font-bold  m-auto text-sm md:text-lg">

     {items.map((item)=>{
           return( 
           <div key={item.id} onClick={()=>handleClick(item.id,item.path)} style={{backgroundColor:item.id===currentClick?'black':'white', color:item.id===currentClick?'white':'black',     cursor:'pointer', padding:'10px 20px',borderRadius:'20px'}}>{item.name}</div>
        )
     })}

      </div>

    </>
  )
}

export default FloatingBar
