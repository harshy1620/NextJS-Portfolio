'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IoChatbubbleEllipsesOutline, IoClose } from 'react-icons/io5';
import ChatWindow from './ChatWindow';

// Floating launcher + the chat panel. Mounted once in app/page.js.
const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <ChatWindow onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((p) => !p)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-darkHover text-white border border-gray-700 shadow-black hover:scale-105 transition dark:border-white/50 dark:shadow-white"
      >
        {open ? <IoClose size={24} /> : <IoChatbubbleEllipsesOutline size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
