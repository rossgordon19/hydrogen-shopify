import React from 'react';
import {Link} from 'react-scroll';
import Logo from '../assets/logo.png';
import Sky from '../assets/sky1.mov';

const Hero = () => {
  return (
    <div className="hero-container relative w-full h-[80vh] md:h-screen flex items-center justify-center text-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={Sky} type="video/mp4" />
      </video>
      <div className="flex flex-col items-center justify-center z-10 h-full w-full lg:justify-center">
        <img className="object-contain" src={Logo} alt="Logo" />
        <div className="mt-[-100px] md:mt-[-200px]">
          {' '}
          {/* Negative margin */}
          <Link to="products" smooth={true} duration={500}>
            <button className="bg-white text-gray-800 font-bold py-3 px-5 text-lg sm:py-3 sm:px-6 sm:text-xl md:py-3 md:px-6 md:text-xl lg:py-4 lg:px-8 lg:text-2xl xl:py-4 xl:px-8 xl:text-2xl rounded-full">
              End of Summer 23
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
