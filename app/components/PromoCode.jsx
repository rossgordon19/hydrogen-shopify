import React from 'react';

const PromoCode = () => {
  return (
    <div className="w-full h-[30px] bg-[#fff] text-black font-bold flex items-center justify-center">
      <h1 className="text-sm">
        Use Code{' '}
        <span className="underline hover:text-yellow-500 cursor-pointer">
          WISHFUL
        </span>{' '}
        and save 10%
      </h1>
    </div>
  );
};

export default PromoCode;
