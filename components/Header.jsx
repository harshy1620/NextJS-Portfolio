import { assets, heroStats, siteData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <div
      id="top"
      className="w-11/12 max-w-5xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 pt-28 pb-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lightHover to-white blur-3xl -z-10 dark:from-darkHover dark:to-darkTheme" />
        <Image
          src={assets.user3}
          alt="Harsh Yadav"
          className="rounded-full w-32 sm:w-40 border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/10"
          priority
          quality={100}
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl font-Ovo"
      >
        Hi! I&apos;m {siteData.name}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-[68px] font-Ovo max-w-4xl"
      >
        {siteData.heroTitle}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-3xl mx-auto font-Ovo text-base sm:text-lg"
      >
        {siteData.heroDescription}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {siteData.heroBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-gray-300 bg-white/80 px-4 py-1.5 text-sm shadow-sm dark:bg-white/5 dark:border-white/15"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-2"
      >
        {heroStats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-200 bg-white/70 p-5 text-left shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{stat.title}</h4>
            <p className="text-sm leading-6 text-gray-600 dark:text-white/75">{stat.description}</p>
          </div>
        ))}
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="#work"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          view projects <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.35 }}
          href={siteData.resumePath}
          download
          target="_blank"
          rel="noreferrer"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
