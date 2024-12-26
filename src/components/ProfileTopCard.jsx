import React from 'react'
import ProfileNav from './profileNav'
import bgVideo from '../Images/e6.mp4'


function ProfileTopCard() {
  return (
    <>
<div className='overflow-hidden w-[100%]' style={{height:'100vh'}}>
  {/* border:'2px solid' */}
       <div className='profile p-1 justify-center md:justify-start  flex
       mb-2'>


<ProfileNav/>
{/* 
 <div className='upArrow'>
<IoIosArrowUp size={20}/>
 </div> */}

</div>


{/* <div className='socialMediaNav gap-2'>

 <img src={instaIcon} alt="" />
 <img src={facebookIcon} alt="" />
 <img src={gmailIcon} alt="" />


</div> */}
<div className='bgNAv '>
    <video className='bgNAvVideo' src={bgVideo}  loop 
          muted autoPlay >
    </video>
</div>

</div>
    </>
  )
}

export default ProfileTopCard
