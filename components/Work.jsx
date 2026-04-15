import { assets, siteData, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Selected projects
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Recent work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo"
      >
        A few projects from my recent work across marketing, internal operations, and student product experiences. The
        Kraftshala ecosystem is where most of my recent full stack impact has been delivered.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid lg:grid-cols-3 gap-6 my-10"
      >
        {workData.map((project) => (
          <motion.article
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            key={project.title}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div
              className="relative h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/75">{project.description}</p>
                <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm leading-6 text-gray-600 dark:text-white/75">{project.summary}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700 dark:border-white/15 dark:text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 mt-6">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-2xl bg-[#f6f3ff] px-4 py-3 text-sm leading-6 text-gray-700 dark:bg-white/5 dark:text-white/75"
                  >
                    {metric}
                  </div>
                ))}
              </div>

              <a
                href={project.href}
                className="w-max flex items-center gap-2 text-sm mt-6 text-gray-700 dark:text-white"
              >
                {project.cta}
                <Image src={assets.right_arrow} alt="" className="w-4 dark:hidden" />
                <Image src={assets.right_arrow_white} alt="" className="w-4 hidden dark:block" />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href={siteData.resumePath}
        download
        target="_blank"
        rel="noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-14 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Download full resume
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
