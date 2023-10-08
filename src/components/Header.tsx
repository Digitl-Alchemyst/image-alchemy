import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='sticky top-0 flex justify-between bg-zinc-700/50 px-5 pt-3 pb-2 shadow-md rounded-lg shadow-slate-400'>
      {/* Left Side  */}
      <div className='flex space-x-2 items-center'>
        <Image src='/gpt.png' alt='ChatGPT Logo' width={65} height={65} />
        <div className=''>
          <h1 className='font-bold'>
            Alchemy Lab <span className='text-alch2'>AI</span> Image Generator
          </h1>
          <h2 className='text-xs'>
            Powered by DALL-E 2 & ChatGPT from OpenAI & Microsoft Azure
          </h2>
        </div>
      </div>

      {/* Right Side  */}
      <div className='flex items-center divide-x text-xs md:text-base'>
        <Link href='https://digitl-alchemyst-portfolio.vercel.app/projects/' className='px-2 font-light text-right'>
          Check out my other Projects here
        </Link>
        <Link href='https://github.com/Digitl-Alchemyst/next-13.5-alchemy-base' className='px-2 font-light'>
          Github Repo
        </Link>
      </div>
    </header>
  );
};

export default Header;
