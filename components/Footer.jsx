import { assets, siteData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a className="w-max flex items-center gap-2 mx-auto" href={`mailto:${siteData.email}`}>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          {siteData.email}
        </a>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" rel="noreferrer" href={siteData.github}>
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={siteData.linkedin}>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
