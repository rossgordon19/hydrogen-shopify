import React, { useRef, useEffect } from 'react';
import Shirts from '../assets/summershirts.mp4';

const Welcome = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          >
            <source src={Shirts} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-start z-10 text-white text-center space-y-4 pt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          End of Summer 23 Collection
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
