import { assets, contactCards } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Contact = () => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast && toast.type !== 'sending') {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setToast({ type: 'error', message: 'Something went wrong. Please try again later.' });
      return;
    }

    setToast({ type: 'sending', message: 'Sending your message...' });
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setToast({ type: 'success', message: 'Message sent successfully!' });
        event.target.reset();
      } else {
        setToast({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch {
      setToast({ type: 'error', message: 'Network error. Please check your connection.' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        If you want to discuss full stack roles, product work, or a project that needs end-to-end execution and
        performance thinking, feel free to reach out.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10"
      >
        {contactCards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            target={card.href.startsWith('http') || card.href.endsWith('.pdf') ? '_blank' : undefined}
            rel={card.href.startsWith('http') || card.href.endsWith('.pdf') ? 'noreferrer' : undefined}
            className="rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 text-left shadow-sm hover:-translate-y-1 hover:shadow-black transition duration-500 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-white"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500 dark:text-white/50">{card.label}</p>
            <p className="text-base font-medium text-gray-800 dark:text-white mt-2">{card.value}</p>
          </a>
        ))}
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

      </motion.form>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-8 left-1/2 z-50 flex items-center gap-3 rounded-xl px-6 py-4 shadow-lg ${
              toast.type === 'success'
                ? 'bg-green-600 text-white'
                : toast.type === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-white'
            }`}
          >
            <span className="text-lg">
              {toast.type === 'success' ? '\u2713' : toast.type === 'error' ? '\u2717' : '\u2026'}
            </span>
            <span className="text-sm font-medium">{toast.message}</span>
            {toast.type !== 'sending' && (
              <button onClick={() => setToast(null)} className="ml-2 text-white/70 hover:text-white text-lg">
                &times;
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
