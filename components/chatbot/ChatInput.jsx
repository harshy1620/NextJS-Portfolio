'use client';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { MAX_MESSAGE_LENGTH } from '@/lib/constants';

// Auto-growing textarea + Send. Enter sends, Shift+Enter newlines.
// Send is disabled while empty/whitespace or a request is in flight.
const ChatInput = ({ onSend, isLoading }) => {
  const [text, setText] = useState('');
  const canSend = text.trim().length > 0 && !isLoading;

  const submit = (e) => {
    e.preventDefault();
    if (!canSend) return;
    onSend(text);
    setText('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      submit(e);
    }
  };

  return (
    <form onSubmit={submit} className="border-t border-gray-200 p-3 dark:border-white/20">
      <div className="flex items-end gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
          maxLength={MAX_MESSAGE_LENGTH}
          placeholder="Type a message…"
          className="max-h-28 flex-1 resize-none rounded-xl bg-gray-100 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-gray-400 dark:bg-white/10 dark:focus:ring-white/40"
        />
        <button
          type="submit"
          disabled={!canSend}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-darkHover text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          <IoSend size={16} />
        </button>
      </div>

      {text.length > MAX_MESSAGE_LENGTH - 100 && (
        <p className="mt-1 text-right text-[11px] opacity-60">
          {text.length}/{MAX_MESSAGE_LENGTH}
        </p>
      )}
    </form>
  );
};

export default ChatInput;
