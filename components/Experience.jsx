import { educationData, experienceData, skillGroups } from '@/assets/assets';
import React from 'react';
import { motion } from 'motion/react';

const Experience = () => {
  const certifications = skillGroups.find((group) => group.title === 'Certifications')?.items ?? [];

  return (
    <motion.div
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Career journey
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Experience & education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo"
      >
        My recent work spans full stack development, automation, and end-to-end product delivery, supported by an
        engineering background that keeps execution structured and outcome-focused.
      </motion.p>

      <div className="grid gap-6 -mx-[11%] px-2 md:mx-0 md:px-0">
        {experienceData.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            className="rounded-3xl border border-gray-200 p-7 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">{item.company}</p>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{item.role}</h3>
                <p className="text-sm text-gray-500 dark:text-white/60">{item.location}</p>
              </div>
              <p className="text-sm rounded-full border border-gray-300 px-4 py-1.5 w-max dark:border-white/15 dark:text-white/80">
                {item.period}
              </p>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-6 mt-6">
              <div className="space-y-3">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl bg-[#f6f3ff] px-4 py-3 text-sm leading-6 text-gray-700 dark:bg-white/5 dark:text-white/75"
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-dashed border-gray-300 p-5 dark:border-white/15">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">Stack & focus</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.stack.map((stackItem) => (
                    <span
                      key={stackItem}
                      className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700 dark:border-white/15 dark:text-white/80"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8 -mx-[11%] px-2 md:mx-0 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="rounded-3xl border border-gray-200 p-7 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">Education</p>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-2">{educationData.degree}</h3>
          <p className="text-gray-600 dark:text-white/75 mt-2">{educationData.institute}</p>
          <p className="text-sm text-gray-500 dark:text-white/60 mt-1">{educationData.period}</p>
          <div className="mt-5 rounded-2xl bg-[#f6f3ff] px-4 py-3 text-sm text-gray-700 dark:bg-white/5 dark:text-white/75">
            Percentage: {educationData.score}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="rounded-3xl border border-gray-200 p-7 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">Certifications</p>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-2">Continuous learning</h3>
          <div className="flex flex-wrap gap-3 mt-6">
            {certifications.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 dark:border-white/15 dark:text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
