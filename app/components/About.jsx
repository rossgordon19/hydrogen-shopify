import React from 'react';

const About = () => {
  return (
    <div className="relative bg-black md:h-[75vh] h-[70vh] flex justify-center items-center text-center sm:text-left px-4 sm:px-0 -mt-0.5">
      <div className="z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 w-full">
        <p className="text-center text-white text-6xl md:text-8xl font-bold">
          A brand built off of Motivation & Positivity.
        </p>
        <p className="text-center text-white text-6xl md:text-8xl font-bold">
          Hoping for the best, while expecting the worst.
        </p>
      </div>
    </div>
  );
};

export default About;
