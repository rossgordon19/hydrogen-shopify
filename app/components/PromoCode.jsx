import React from 'react';

const PromoCode = () => {
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText('WISHFUL')
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((err) => {
        console.error('Unable to copy text: ', err);
      });
  };

  return (
    <div className="w-full h-[30px] bg-[#fff] text-black font-bold flex items-center justify-center">
      <h1 className="text-sm">
        Use Code{' '}
        <span
          className="underline hover:text-[#b1a482] cursor-pointer"
          onClick={handleCopyToClipboard}
        >
          WISHFUL
        </span>{' '}
        and save 10%
      </h1>
    </div>
  );
};

export default PromoCode;
