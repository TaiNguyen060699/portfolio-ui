import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="p-6 md:py-4 md:px-[147px] overflow-hidden      ">
      <div className="flex justify-end text-xl text-black font-medium cursor-pointer">
        <span className="mr-5">Works</span>
        <span className="mr-5">Blog</span>
        <span>Contact</span>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-8 md:mt-[140px]">
        <div className="w-full md:w-[60%] flex flex-col items-center md:block">
          <div className="text-black font-bold text-4xl leading-[55px] text-center md:text-left">
            Hi, I am Tai,
            <br/>
            Frontend Developer
          </div>
          <div className="text-black text-base font-normal my-10 text-center md:text-left">
          With a solid background as a frontend developer spanning over 3 years, my aspiration lies in evolving into an accomplished software developer, actively engaging with a dynamic team to drive impactful results and elevate my professional journey. I approach each challenge with an insatiable thirst for knowledge, striving to integrate new skills and expertise within an innovative setting that fosters continuous development opportunities
          </div>
          <a tag="div" href="./TaiNguyen_FE.pdf" target="_blank" className="text-white text-xl font-medium rounded-sm bg-orange p-2 w-[208px] text-center cursor-pointer">
            Download Resume
          </a>
        </div>
        <div className="w-full md:w-[40%] flex justify-center">
          <Image
            className="rounded-[50%]" 
            src="/image.jpg" 
            alt="image"
             width={243}
            height={243} 
          />
        </div>
      </div>
    </div>
  )
}

export default Header