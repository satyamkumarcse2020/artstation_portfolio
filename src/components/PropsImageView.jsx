import React from 'react';
import { useLocation } from 'react-router-dom'; // Correct hook for accessing state
import './props.css'
function PropsImageView() {
  const location = useLocation();
  const data = location.state;

  console.log(data); // Check if ImgArray contains the expected data


  return (



    <div className=''>
      {data.map((img, index) => {

         const isVideo = img.endsWith('.mp4')

        return (  // Explicit return statement here

          
          <div key={index}
            className="innerImg cursor-pointer m-auto transition-all duration-[0.3s] ease-linear w-[60%] h-[600px]"
            
          >
            <div className="img w-full">
              {isVideo?(
                 <video
                 className="w-full h-[90vh]"
                 controls
                 autoPlay
                 loop
                 muted
                 preload
                 src={img}
                 alt=""
               />
              ):(

                    <img className='w-full h-[90vh]' src={img} alt="" />

              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PropsImageView;
