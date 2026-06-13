'use client';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useChat } from '@/hooks/useChat';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import ResumeUpload from './ResumeUpload';

// The panel itself: header, Chat / Refer tabs, and the active body.
const ChatWindow = ({ onClose }) => {
  const [tab, setTab] = useState('chat'); // 'chat' | 'resume'
  const { messages, isLoading, error, send, addSystemNote } = useChat();

  return (
    <div className="w-[90vw] max-w-sm h-[70vh] max-h-[560px] flex flex-col overflow-hidden rounded-2xl bg-white text-gray-800 border border-gray-400 shadow-black dark:bg-darkTheme dark:text-white dark:border-white/30 dark:shadow-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-lightHover dark:border-white/20 dark:bg-darkHover">
        <div>
          <h3 className="font-Ovo text-lg leading-tight">Chat with AI Harsh</h3>
          <p className="text-xs opacity-70">Ask about my work, or refer me</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
        >
          <IoClose size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 text-sm dark:border-white/20">
        <TabButton active={tab === 'chat'} onClick={() => setTab('chat')}>
          Chat
        </TabButton>
        <TabButton active={tab === 'resume'} onClick={() => setTab('resume')}>
          Refer me
        </TabButton>
      </div>

      {/* Body */}
      {tab === 'chat' ? (
        <>
          <MessageList messages={messages} isLoading={isLoading} error={error} />
          <ChatInput onSend={send} isLoading={isLoading} />
        </>
      ) : (
        <ResumeUpload
          onUploaded={(note) => {
            addSystemNote(note);
            setTab('chat');
          }}
        />
      )}
    </div>
  );
};

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`flex-1 py-2.5 font-Ovo transition ${
      active ? 'border-b-2 border-gray-700 dark:border-white' : 'opacity-60 hover:opacity-100'
    }`}
  >
    {children}
  </button>
);

export default ChatWindow;
