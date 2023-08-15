import React from 'react';
import { Link } from 'react-scroll';
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
      <div className="flex flex-col items-center justify-center z-10 h-full w-full md:justify-start">
        <img className="object-contain mb-4 md:mb-4" src={Logo} alt="Logo" />
        <Link to="products" smooth={true} duration={500}>
          <button className="bg-white sm:hover:bg-white text-gray-800 font-bold py-3 px-5 text-lg -mt-[100px] sm:-mt-[100px] md:-mt-[150px] lg:-mt-[150px] xl:-mt-[150px] rounded-full">
            Fall 23 Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
