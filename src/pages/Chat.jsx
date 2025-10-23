import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // You may need to install uuid: npm install uuid

import Sidebar from '../components/chat/Sidebar';
import ChatHeader from '../components/chat/ChatHeader';
import MessageList from '../components/chat/MessageList';
import ChatInput from '../components/chat/ChatInput';

// Define your API endpoint
// const API_URL = import.meta.env.CHATBOT_API_URL;
const API_URL = "https://shakti-rag.onrender.com/chat";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
        text: "Hello! I am Shakti Saathi, your AI guide. How can I assist you today?",
        sender: "ai"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [error, setError] = useState(null);

  // Load or create a session ID on component mount
  useEffect(() => {
    let currentSessionId = localStorage.getItem('chatSessionId');
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('chatSessionId', currentSessionId);
    }
    setSessionId(currentSessionId);
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(API_URL, {
        question: input,
        session_id: sessionId,
        model: "gpt-4o"
      });

      const aiMessage = { text: response.data.answer, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, aiMessage]);

    } catch (err) {
      const errorMessage = { text: "Sorry, I encountered an error. Please try again.", sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
      setError('Failed to get a response from the server.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#FFFBF8] p-4">
      <div className="flex w-full h-full max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <Sidebar />
        <main className="flex flex-col flex-1">
          <ChatHeader />
          <MessageList messages={messages} isLoading={isLoading} />
          {error && <p className="text-center text-red-500 text-sm px-4 pb-2">{error}</p>}
          <ChatInput
            input={input}
            setInput={setInput}
            handleSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </main>
      </div>
    </div>
  );
};

export default Chat;