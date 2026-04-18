import { serviceData } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Core expertise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo"
      >
        My focus is shipping product-ready full stack systems — from polished interfaces to robust APIs — that perform
        well and stay maintainable as features, teams, and requirements grow.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="hidden md:grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description }) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={title}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-white/80">{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="md:hidden my-10 -mx-[11%] px-2">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          slidesPerView={1}
          spaceBetween={16}
          loop
        >
          {serviceData.map(({ icon, title, description }) => (
            <SwiperSlide key={title} className="h-auto pb-2">
              <div className="border border-gray-400 rounded-lg px-6 py-10 bg-white/70 dark:bg-white/5 h-full">
                <Image src={icon} alt="" className="w-10" />
                <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 leading-6 dark:text-white/80">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            ref={prevRef}
            aria-label="Previous"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 text-gray-700 hover:bg-lightHover duration-300 dark:border-white/50 dark:text-white dark:hover:bg-darkHover"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            ref={nextRef}
            aria-label="Next"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 text-gray-700 hover:bg-lightHover duration-300 dark:border-white/50 dark:text-white dark:hover:bg-darkHover"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
