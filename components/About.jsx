import { infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center text-center my-20"
      >
        <p className="mb-6 max-w-2xl font-Ovo text-base sm:text-lg">
          I build full stack products that are fast, structured, and easy to scale. My recent work spans end-to-end web
          applications, internal workflow platforms, and student-facing dashboards where frontend polish, backend
          reliability, and developer-friendly architecture all matter at the same time.
        </p>

        <p className="mb-10 max-w-2xl text-gray-600 dark:text-white/75">
          I work across the entire stack — React.js, Next.js, and Gatsby on the frontend, Node.js, Express,
          Sequelize, MongoDB, and MySQL on the backend, and GitHub Actions, AWS S3, and CloudFront for CI/CD and
          cloud deployment.
        </p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl"
        >
          {infoList.map(({ icon, iconDark, title, description }) => (
            <motion.li
              whileHover={{ scale: 1.05 }}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              key={title}
            >
              <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mx-auto mt-3" />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
              <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="my-6 text-gray-700 font-Ovo dark:text-white/80"
        >
          Tools I use
        </motion.h4>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
        >
          {toolsData.map((tool, index) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-white/70 dark:bg-white/5"
              key={`${index}-${tool.src}`}
            >
              <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
