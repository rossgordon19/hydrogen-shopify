import React from 'react';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 2.0,
    },
  },
};

const About = () => {
  return (
    <div className="relative bg-black h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full flex justify-center items-center text-center px-4 sm:px-0">
      <div className="z-10 flex flex-col items-center justify-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-8 w-full px-2 sm:px-4 md:px-8 lg:px-16 max-w-screen-lg mx-auto">
        <motion.p
          className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
        >
          Wishful Thinking spreads inspiration through dialogue & vision,
          creating a sign of hope and placing your mind in a happy place no
          matter where you stand.
        </motion.p>
        <motion.p
          className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
          variants={fadeInAnimationVariants}
          initial="initial"
          animate="animate"
        >
          Wishful Thinking is Motivation You Wear & Positivity you spread!
        </motion.p>
      </div>
    </div>
  );
};

export default About;
