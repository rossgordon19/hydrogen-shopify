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
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
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
      {/* Optional content overlaying the video */}
      <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-start z-10 text-white text-center space-y-4 pt-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mt-[150px] md:mt-5">End of Summer 23 Collection</h1>
      </div>
    </div>
  );
};

export default Welcome;
