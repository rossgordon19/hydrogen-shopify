import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const About = () => {
  const controls = useAnimation();
  const [elementTop, setElementTop] = useState(0);

  const handleScroll = () => {
    const offsetTop = window.innerHeight / 2;
    if (window.scrollY + offsetTop > elementTop) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  };

  useEffect(() => {
    setElementTop(document.querySelector('.animate').offsetTop);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-black h-[50vh] lg:h-screen w-full flex justify-center items-center text-center sm:text-left px-4 sm:px-0">
      <div className="z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 w-full px-4 md:px-8 lg:px-16 max-w-screen-lg mx-auto">
        <motion.p
          className="animate text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          Wishful Thinking spreads inspiration through dialogue & vision,
          creating a sign of hope and placing your mind in a happy place no
          matter where you stand.
        </motion.p>
        <motion.p
          className="animate text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          Wishful Thinking is Motivation You Wear & Positivity you spread!
        </motion.p>
      </div>
    </div>
  );
};

export default About;
