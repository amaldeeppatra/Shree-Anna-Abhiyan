import React from 'react';
import { Paperclip, Smile, SendHorizontal } from 'lucide-react';

const ChatInput = ({ input, setInput, handleSendMessage, isLoading }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a new message here"
          className="w-full h-12 p-3 pr-32 border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#DE6B18] transition-all"
          rows="1"
          disabled={isLoading}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
          <button type="button" className="text-gray-500 hover:text-[#DE6B18]">
            <Paperclip size={22} />
          </button>
          <button type="button" className="text-gray-500 hover:text-[#DE6B18]">
            <Smile size={22} />
          </button>
          <button
            type="submit"
            className="p-2 bg-[#DE6B18] text-white rounded-full hover:bg-[#8C3F0B] disabled:bg-gray-300 transition-colors"
            disabled={isLoading || !input.trim()}
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;