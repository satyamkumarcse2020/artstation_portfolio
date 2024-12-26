import React, { useEffect } from 'react';
import aPic from '../Images/a.jpg';
import catPic from '../Images/allcat.jpg';

import shipVideo from '../Images/e6.mp4';

import PropsImageComp from './PropsImageComp';
import './all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function All() {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'linear',
        });
      }, []);
      

  return (
    <div className="container  flex flex-col  w-full p-2 md:grid-cols-3 gap-4">
      {/* Item with left fade-in animation */}
      <div
        className="item leftAnim"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="100"
      >
        <PropsImageComp img={[catPic]} coverPic={shipVideo} path={'/img'} navigatePath={'/a'} />
      </div>

      {/* Static Items */}
      <div className="item"
      data-aos="fadeIn"
      data-aos-offset="0"
      data-aos-delay="100"
      >
        <PropsImageComp img={[aPic, aPic, aPic]} coverPic={aPic} path={'/img'} navigatePath={'/a'} />
      </div>

      <div className="item" data-aos="fade-left"
       data-aos-offset="0"
       data-aos-delay="100"
     >
        <PropsImageComp img={[aPic, aPic, aPic]} coverPic={aPic} path={'/img'} navigatePath={'/a'} />
      </div>

      {/* Another item with left fade-in animation */}
      <div
        className="item leftAnim"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="100"
      >
        <PropsImageComp img={[aPic, aPic, aPic]} coverPic={aPic} path={'/img'} navigatePath={'/a'} />
      </div>

      {/* Item with fade-up animation */}
      <div
        className="item"    data-aos="fadeIn"
        data-aos-offset="0"
        data-aos-delay="100"   >
        <PropsImageComp img={[aPic, aPic, aPic]} coverPic={aPic} path={'/img'} navigatePath={'/a'} />
      </div>

      {/* Another static item */}
      <div className="item" data-aos="fade-left"
      data-aos-offset="0"
      data-aos-delay="100" >
        <PropsImageComp img={[aPic, aPic, aPic]} coverPic={aPic} path={'/img'} navigatePath={'/a'} />
      </div>
    </div>
  );
}

export default All;
