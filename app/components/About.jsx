import React from 'react';

const About = () => {
  return (
    <div className="relative bg-black md:h-[75vh] h-[70vh] flex justify-center items-center text-center sm:text-left px-4 sm:px-0 -mt-0.5 overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 w-full px-4 md:px-8 lg:px-16">
        <p className="text-center text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-snug sm:leading-normal md:leading-relaxed">
          Wishful Thinking spreads inspiration through dialogue & vision,
          creating a sign of hope and placing your mind in a happy place no
          matter where you stand.
        </p>
        <p className="text-center text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-snug sm:leading-normal md:leading-relaxed">
          Wishful Thinking is Motivation You Wear & Positivity you spread!
        </p>
      </div>
    </div>
  );
};

export default About;
