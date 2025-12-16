import React, { useState } from 'react';
import mainBanner from '../../assets/main.png'
  
const MainBanner = () => {
 
  return (
    <nav className="   w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
 

             {/* <img className='h-80 w-full' src="https://lh3.googleusercontent.com/gg-dl/ABS2GSmYiWzqOQEGZuFmyyOv-FJst777i-kGVO0kKuHUB8Lt7Mteti9JS97xHK_5_ZlEruMgigizsVw08RFmkqgpZ-5RrYvOrND0wRgFsdzN_znonTOmLOhLUJ6SoXqWprutK3XxN-An4DbySn7NoWV4NwPvRqqn_CpwIujbY-6B82cjfaTDiA=s1024-rj" alt="" /> */}
             
             <img src={mainBanner} alt="" />
      
          
        
        </div>
        
     
      </div>
    </nav>
  );
};

export default MainBanner;