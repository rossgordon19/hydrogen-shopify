import React from 'react';
import Logo from '../assets/logo.png';
import Sky from '../assets/sky1.mov';

const Hero = () => {
  return (
    <div className="relative w-full h-[68vh] md:h-screen flex items-center justify-center text-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={Sky} type="video/mp4" />
      </video>
      <div className="flex flex-col items-center justify-center z-10 h-full w-full md:justify-start">
        <img className="object-contain mb-4 md:mb-4" src={Logo} alt="Logo" />
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-5 text-lg -mt-[100px] md:-mt-[220px] sm:py-3 sm:px-6 sm:text-xl md:py-3 md:px-6 md:text-xl lg:py-4 lg:px-8 lg:text-2xl xl:py-4 xl:px-8 xl:text-2xl rounded-full">
          Products
        </button>
      </div>
    </div>
  );
};

export default Hero;
