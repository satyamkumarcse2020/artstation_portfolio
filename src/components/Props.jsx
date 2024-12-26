import React from 'react'
import aPic from '../Images/a.jpg'
import bPic from '../Images/b.jpg'
import cPic from '../Images/c.jpg'
import PropsImageComp from './PropsImageComp'
import userPic from '../Images/userPic.png'


import './props.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function All() {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'linear',
        });
      }, []);
}

function Props() {
  return (
    <div className='mainDiv justify-between flex flex-col md:flex-row w-full p-2 gap-4'>
  
  <div  className='w-full m-auto'
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="100">

 <PropsImageComp img={[aPic,aPic,aPic]} coverPic={aPic} path={'/img'} navigatePath={'/a'} />
  </div>


<div className='w-full m-auto'
        data-aos="fadeIn"
        data-aos-offset="0"
        data-aos-delay="100">

  <PropsImageComp coverPic={bPic} img={[bPic,bPic,bPic]} path={'/img'} navigatePath={'/a'} />
</div>


  <div  className='w-full m-auto'
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="100">

 <PropsImageComp coverPic={cPic} img={[cPic,cPic,cPic]} path={'/img'} navigatePath={'/a'} />
  </div>

  </div>
    
  )
}

export default Props



