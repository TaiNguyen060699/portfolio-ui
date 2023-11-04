import React from 'react'
import Image from 'next/image';
const Footer = () => {
  const socials = [
    {
      icon: "./fb.png",
      url: "https://www.facebook.com/tai.ns99"
    },
    {
      icon: "./insta.png",
      url: "https://www.instagram.com/nguyentai_99/"
    },
    {
      icon: "./Linkedin.png",
      url: "https://www.linkedin.com/in/tainguyen99/"
    },
    {
      icon: "./github.png",
      url: "https://github.com/TaiNguyen060699"
    }
  ];

  return (
    <div className="p-6 md:py-4 md:px-[147px]">
      <div className="flex justify-center">
        {socials.map((social, key) => (
          <a tag="div" href={social.url} key={key} target="_blank" className="mr-7 last:mr-0">
            <img src={social.icon} alt="icon" height="35px" width="35px" />
          </a>
        ))}
      </div>
      <div className="text-sm text-center mt-7">Copyright ©2020 All rights reserved</div>
    </div>
  )
}

export default Footer