import { skillGroups } from '@/assets/assets';
import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
  return (
    <motion.div
      id="skills"
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
        Technical toolkit
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills & tools
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo"
      >
        A practical mix of frontend and backend engineering, API development, and performance-minded delivery across
        web applications, dashboards, and automation-heavy workflows.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl border border-gray-200 p-6 bg-white/80 shadow-sm hover:shadow-black hover:bg-lightHover transition duration-500 dark:border-white/10 dark:bg-white/5 dark:hover:bg-darkHover/40 dark:hover:shadow-white"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2 mt-5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-300 px-3 py-1.5 text-sm text-gray-700 dark:border-white/15 dark:text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
