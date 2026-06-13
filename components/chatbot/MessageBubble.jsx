'use client';

// One message. Content is rendered as plain text (React escapes it by
// default — no dangerouslySetInnerHTML), so HTML/script in user input is
// shown literally, not executed. whitespace-pre-wrap keeps line breaks.
const MessageBubble = ({ role, content, system }) => {
  if (system) {
    return (
      <div className="flex justify-center">
        <span className="rounded-full bg-lightHover px-3 py-1 text-xs opacity-80 dark:bg-darkHover">
          {content}
        </span>
      </div>
    );
  }

  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-sm ${
          isUser
            ? 'rounded-br-sm bg-darkHover text-white'
            : 'rounded-bl-sm bg-lightHover text-gray-800 dark:bg-white/10 dark:text-white'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default MessageBubble;
