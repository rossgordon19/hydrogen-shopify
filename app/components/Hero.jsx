import React from 'react';
import Logo from '../assets/logo.png';

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#fff] text-black">
      <div className="flex-1 flex items-center justify-center">
        <img className="object-contain" src={Logo} alt="Logo" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img className="object-contain" src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Hero;
