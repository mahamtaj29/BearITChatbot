import React from 'react'
import { useState, useEffect } from 'react';
import topics from './Database';

export const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

const handleSendMessage = () => {
   /*  if (input.trim()) { */
        
        setMessages([...messages, `Chatbot: ${input}`]);
        setMessages([...messages, `User: ${input}`]);
        setInput('');
    /* } */
    };
const handleButtonClick = (topic:string) => {
    setMessages([...messages, ` ${topic}`]);
}

  return (
    <div className="p-6 border rounded shadow-md">
      <div className="mb-4">
        <h3 className="text-l">Hi, I’m BearBot, your robot assistant. How can I help you?
You can select a topic below.
 </h3>
      </div>
      <div className="mb-4 h-64 overflow-y-auto bg-gray-100 p-2 rounded">
        {messages.map((message, index) => (
          <div key={index} className={`w-full rounded-full px-4 py-2 text-blue ${message.startsWith('Chatbot:') ? 'typewriter' : ''}`}>           
            {message}
          </div>))}
        </div>
          <div className="mt-4">
            {
            topics.map((topic, index) => (
              <div key={index} className="mb-2">
                <button
                  className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
                  onClick={() => handleButtonClick(topic.description )}
                >
                  { topic.title}
                </button>
                </div>))}
            </div>
        <div>
        <input
          type="text"
          className="w-full rounded-full px-4 py-2 text-black"
          value={input}
          placeholder='Start chat with BearBot'
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          type="submit" className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20">
          Send
        </button>
      </div>

    </div>
  )
}
