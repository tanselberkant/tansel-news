import React from 'react';

const Footer = () => {
  return (
    <div className="w-full px-5 py-5 flex flex-col sm:flex-row justify-between items-center bg-[#001733] border-t-2 border-gray-700 ">
      <div className="text-center w-full text-[14px] text-white">
        @Tansel Berkant Oflaz |{' '}
        <span>
          <a
            href="https://tanselberkant.dev/"
            className="hover:text-gray-500"
            target="_blank"
          >
            https://tanselberkant.dev/
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
