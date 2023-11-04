/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image';

const Project = () => {
  return (
    <div className="p-6 md:py-4 md:px-[147px]">
      <h3 className="text-black text-[22px] font-normal leading-[60px] text-center md:text-left">Feature works</h3>
      <div className="flex items-start flex-col md:flex-row md:items-center">
        <a tag="div" target="_blank" href="https://www.okxe.vn/">
          <img
            src="/1.png"
            alt="okxe"
            className="rounded-sm hover:scale-105 duration-300 transition-all w-full md:w-[320px] h-[146px] md:h-[180px] object-contain" 
          />
        </a>
        <div className="ml-0 mt-4 md:mt-0 md:ml-4">
          <div class="text-2xl md:text-[30px] font-bold">OKXE Application</div>
          <p className="text-base font-normal max-w-xl">The OKXE Application is an e-commerce platform specializing in motorcycle transactions. It efficiently supports various motorcycle-related needs, hosting over 2 million products and serving more than 1.5 million users.</p>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row md:items-center my-4 md:my-0">
        <a tag="div" target="_blank" href="https://www.okxe.vn/blog">
          <img
            src="/2.png"
            alt="okxe"
            className="rounded-sm hover:scale-105 duration-300 transition-all w-full md:w-[320px] h-[146px] md:h-[180px] object-contain"
          />
        </a>
        <div className="ml-0 mt-4 md:mt-0 md:ml-4">
          <div class="text-2xl md:text-[30px] font-bold">OKXE Blog</div>
          <p className="text-base font-normal max-w-xl">A blog website provides diverse content including personal experiences, societal discussions, skill tutorials, product reviews, arts and culture, science and technology.</p>
        </div>
      </div>
      <div className="flex items-start flex-col md:flex-row md:items-center">
        <a tag="div" target="_blank" href="https://www.philippineairlines.com/">
          <img
            src="/4.webp"
            alt="okxe"
            className="rounded-sm hover:scale-105 duration-300 transition-all w-full md:w-[320px] h-[146px] md:h-[180px] object-contain" 
          />
        </a>
        <div className="ml-0 mt-4 md:mt-0 md:ml-4">
          <div class="text-[30px] font-bold">Philippine Airlines</div>
          <p className="text-base font-normal max-w-xl">Philippine Airlines, known as Philippine Air Lines from 1941 until 1970, is the flag carrier of the Philippines. Headquartered at the PNB Financial Center in Pasay, the airline was founded in 1941 and is the first and oldest commercial airline in Asia.</p>
        </div>
      </div>
      <div className="mt-8 border-b-2"></div>
    </div>
  )
}

export default Project