import React, {useState} from 'react';

const PromoCode = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText('WISHFUL')
      .then(() => {
        console.log('Text copied to clipboard');
        setIsCopied(true);
        // Hide the tooltip after 1.5 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
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
          className="underline hover:text-[#1762af] cursor-pointer relative"
          onClick={handleCopyToClipboard}
        >
          WISHFUL
          {isCopied && (
            <span className="absolute top-[-5px] left-0 bg-gray-200 text-xs px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </span>
        and save 10%
      </h1>
    </div>
  );
};

export default PromoCode;
