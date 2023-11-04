import React from 'react'

const Experience = () => {
  return (
    <div className="p-6 md:py-4 md:px-[147px] pb-[32px] pt-4 bg-blue">
      <h3 className="text-black text-[22px] font-normal leading-[60px] text-center md:text-left">Work Experience</h3>
      <div className="block md:flex justify-between">
        <div className="bg-white p-3 md:p-7 w-fill md:w-[49%] mb-3 md:mb-0">
          <div className="text-[26px] font-bold">Sutrix Solutions</div>
          <div className="my-2">Nov/2020 - Mar/2022</div>
          <ul className="text-xs list-disc pl-7">
            <li><b>User Interface Development:</b>Creating engaging and user-friendly interfaces using HTML, CSS, and JavaScript.</li>
            <li><b>Optimizing User Experience:</b>Ensuring the best possible user experience by optimizing performance, page load times, and user interactions.</li>
            <li><b>Interacting with Back-end:</b>Working with Back-end developers to ensure compatibility and seamlessness of the product.</li>
            <li><b>API Integration: </b>Working with APIs to fetch data from servers and integrate it into the user interface.</li>
          </ul>
        </div>
        <div className="bg-white p-3 md:p-7 w-full md:w-[49%]">
          <div className="text-[26px] font-bold">OKXE</div>
          <div className="my-2">Apr/2022 - Present</div>
          <ul className="text-xs list-disc pl-7">
            <li><b>SEO Optimization:</b>Ensuring that the user interface is built with SEO standards to optimize rankings on search engines.</li>
            <li><b>Code Management and Monitoring:</b>Using source control systems like Git to manage and monitor the source code and versions of the project.</li>
            <li><b>Using Frameworks and Libraries: </b>Utilizing frameworks and libraries such as React, Angular, or Vue.js to increase performance and streamline the development process.</li>
            <li><b>Understanding of Graphic Design:</b>Having basic knowledge of graphic design to effectively collaborate with designers.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience