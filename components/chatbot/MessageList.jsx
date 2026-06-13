'use client';
import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

// Scrollable conversation. Auto-scrolls to the newest message / indicator.
const MessageList = ({ messages, isLoading, error }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
      {messages.length === 0 && !isLoading && (
        <div className="h-full flex items-center justify-center px-6 text-center">
          <p className="font-Ovo text-sm opacity-70">
            Hi! I&apos;m AI Harsh 👋 Ask me about my projects, skills, or experience.
          </p>
        </div>
      )}

      {messages.map((m, i) => (
        <MessageBubble key={i} role={m.role} content={m.content} system={m.system} />
      ))}

      {isLoading && <TypingIndicator />}

      {error && <p className="text-center text-xs text-red-500 dark:text-red-400">{error}</p>}

      <div ref={endRef} />
    </div>
  );
};

export default MessageList;
