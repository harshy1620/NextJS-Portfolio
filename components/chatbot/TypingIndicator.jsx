'use client';

// Three bouncing dots shown while waiting for the AI reply.
const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-lightHover px-4 py-3 dark:bg-white/10">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 animate-bounce rounded-full bg-gray-500 dark:bg-white/70"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

export default TypingIndicator;
