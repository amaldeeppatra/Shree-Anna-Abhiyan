import React, { useEffect, useRef } from 'react';
import botAvatar from '../../assets/robolady.png'; // Use your bot avatar
import { CircleUser } from 'lucide-react';


const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex items-end gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <img src={botAvatar} alt="Bot Avatar" className="w-10 h-10 rounded-lg" />}
      
      <div className={`max-w-xl p-4 rounded-2xl ${isUser ? 'bg-green-100 border border-green-200 text-gray-800 rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'}`}>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
      </div>

      {isUser && <CircleUser/>}
    </div>
  );
};

const MessageList = ({ messages, isLoading }) => {
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
      {isLoading && (
        <div className="flex items-end gap-3 my-4 justify-start">
          <img src={botAvatar} alt="Bot Avatar" className="w-10 h-10 rounded-lg" />
          <div className="p-4 rounded-2xl bg-white border border-gray-200 rounded-bl-none">
            <div className="flex items-center justify-center gap-1.5">
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        </div>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;