import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

const Footer2 = () => {
  return (
    <div className="w-full h-[210px] bg-black text-white flex justify-center items-center">
      {/* Container */}
      <div className="font-bold inline">
        <p className="text-3xl px-6 text-center">Connect</p>
        <div className="socials flex flex-cols-2 mx-auto justify-between p-6 space-x-4">
          {/* Instagram */}
          <a
            className="text-3xl text-white hover:text-[#b1a482]"
            href="https://instagram.com/wishflthinkn?"
            target="_blank"
          >
            <BsInstagram />
          </a>

          {/* Facebook */}
          <a
            className="text-3xl text-white hover:text-[#b1a482]"
            href="https://facebook.com/"
            target="_blank"
          >
            <BsFacebook />
          </a>

          {/* Twitter */}
          <a
            className="text-3xl text-white hover:text-[#b1a482]"
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
