'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { getOrCreateSessionId } from '@/lib/session';
import { sendChat } from '@/lib/chatApi';
import { MAX_MESSAGE_LENGTH } from '@/lib/constants';

export function useChat() {
  const [messages, setMessages] = useState([]); // [{ role, content, system? }]
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sessionIdRef = useRef(null);

  useEffect(() => {
    sessionIdRef.current = getOrCreateSessionId();
  }, []);

  const send = useCallback(
    async (rawText) => {
      const text = rawText.trim();
      if (!text || isLoading) return;
      if (text.length > MAX_MESSAGE_LENGTH) {
        setError(`Message too long (max ${MAX_MESSAGE_LENGTH} characters).`);
        return;
      }
      setError(null);

      // Show the user's message immediately, before the network roundtrip
      const nextMessages = [...messages, { role: 'user', content: text }];
      setMessages(nextMessages);
      setIsLoading(true);

      try {
        const data = await sendChat({
          sessionId: sessionIdRef.current,
          // Only role/content go to the backend (strip any local-only flags)
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        });
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } catch (err) {
        setError(err.message || 'Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  // Append a centered system-style note (e.g. resume upload confirmation)
  const addSystemNote = useCallback((content) => {
    setMessages((prev) => [...prev, { role: 'assistant', content, system: true }]);
  }, []);

  return { messages, isLoading, error, send, addSystemNote };
}
