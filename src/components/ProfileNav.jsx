import React, { useState } from 'react'
import profilePic from '../Images/images.jpeg'
function ProfileNav() {
    
  return (
    <>
       <div className='flex flex-col  md:flex-row gap-2'>
        <div className="imgDiv 
   w-[50px] h-[50px] overflow-hidden">
              <img src={profilePic} alt="" />
        </div>
        <div className="pfTxt">
             <h1 className='font-bold'>Name of Person</h1>
             <p>Real Artist</p>

        </div>
        </div>
    </>
  )
}

export default ProfileNav
