import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer2 = () => {
  return (
    <div className="w-full h-[210px] bg-[#b1a482] text-black flex justify-center items-center">
      {/* Container */}
      <div className="font-bold inline">
        <p className="text-3xl px-6 text-center">Connect</p>
        <div className="flex flex-cols-2 mx-auto justify-between p-6 space-x-4">
          {/* Instagram */}
          <a
            className="text-3xl hover:text-white"
            href="https://instagram.com/wishflthinkn?"
            target="_blank"
          >
            <BsInstagram />
          </a>

          {/* Facebook */}
          <a
            className="text-3xl hover:text-white"
            href="https://facebook.com/"
            target="_blank"
          >
            <BsFacebook />
          </a>

          {/* Twitter */}
          <a
            className="text-3xl hover:text-white"
            href="https://www.twitter.com/WishflThinkn"
            target="_blank"
          >
            <BsTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
