import React, { useEffect, useState } from 'react'
import profilePic from '../Images/images.jpeg'
import bgnav from '../Images/bgNav.png'
import instaIcon from '../Images/instagram.png'
import gmailIcon from '../Images/gmail.png'
import facebookIcon from '../Images/facebook.png'
import { IoIosArrowUp } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Props from './Props'
import ProfileNav from './profileNav'
import All from './All'
import FloatingBar from './FloatingBar'

import './navbar.css'
import ProfileTopCard from './ProfileTopCard'
import Materials from './Materials'
import Environment from './Environment'


function Navbar() {
    
    const[currentIten,setCurrentitem]=useState(1);

    const navItems=[
        {id:1, name:"All" },
        {id:2, name:"Props" }
        ,
        {id:3, name:"Materials" },
        {id:4, name:"Environment" }

    ]

    function handleCurrItem(id){
        setCurrentitem(id)
        localStorage.setItem('currentItem', id); // Fixed the typo

    }

    useEffect(() => {
        
        const savedItem = localStorage.getItem('currentItem');
        if (savedItem) {
            setCurrentitem(Number(savedItem));
            console.log(savedItem)
        }
    }, []);



    

    return (
        <>
       
<ProfileTopCard/>

<div className='mt-4 md:mt-10' >

    <div className='proContainer' >
      
     
      
      <h1 className='text-white font-bold text-xl md:text-2xl my-2'>Portfolio</h1>

<div className="navBar flex fle gap-4 md:gap-5 text-md md:text-lg overflow-scroll no-scrollbar">

    {navItems.map(item=>{
        return(
        <ul key={item.id}
        className={currentIten==item.id?' text-gray-400':''}
        style={{borderBottom:currentIten===item.id?'2px solid #26bbff':'none'}}
        onClick={()=>handleCurrItem(item.id)}
        >{item.name}
        </ul>

        )
    })}

</div>
    </div>



    
    {currentIten===1? <All/>:''}

{currentIten===2? <Props/>:''}

{currentIten===3? <Materials/>:''}
{currentIten===4? <Environment/>:''}


   

   <div  className='fixed bottom-2 w-full'>
   <FloatingBar currIn={0}/>
   </div>
   </div>
    </>
  )
}

export default Navbar
