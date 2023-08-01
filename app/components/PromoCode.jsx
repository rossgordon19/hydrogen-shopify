import React from 'react';

const PromoCode = () => {
  return (
    <div className="w-full h-[30px] bg-black text-white flex items-center justify-center font-bold">
      <h1 className="text-sm">
        Use Code{' '}
        <span className="underline hover:text-[#b1a482] cursor-pointer">
          WISHFUL
        </span>{' '}
        and save 10%
      </h1>
    </div>
  );
};

export default PromoCode;
