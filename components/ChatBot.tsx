import React from 'react'
import { useState, useEffect } from 'react';
import topics from './Database';

export const ChatBot: React.FC = () => {
    // State to track chat messages
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState<string>('');
// Function to handle sending a message
const handleSendMessage = () => {
    if (input.trim()) { 
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'User', text: input }, // Display user message
        { sender: 'Chatbot', text: input }, //  Dsipaly bot response (placeholder)
      ]);
        setInput('');  // Clear input field
     } 
    };
    // Function is handling clicks on topic buttons
const handleButtonClick = (topic:string) => {
  setMessages((prevMessages) => [...prevMessages, { sender: 'Chatbot', text: topic }]);
};

  return (

    <div className="p-6 border rounded shadow-md">
      <div className="mb-4">
        <h3 className="text-l">
          Hi, I’m BearBot, your robot assistant. How can I help you?
          You can select a topic below.
        </h3>
      </div>
    {/* This section is dispalying chat messages */}
      <div className="mb-4 h-64 overflow-y-auto bg-gray-100 p-2 rounded">
        {messages.map((message, index) => (
          <div 
          key={index} 
          className={`w-full rounded-full px-4 py-2 text-blue ${message.sender === 'Chatbot' ? 'bg-gray-200' : 'bg-blue-200'}`}
          >           
            {message.sender}: {message.text}
          </div>))}
        </div>
          <div className="mt-4">
    {/* This section will display Buttons of topics */}
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
      {/* Input field and send button for user messages */}
      <div>
        <input
          type="text"
          /* className="w-full rounded-full px-4 py-2 text-black" */
          value={input}
          placeholder='Start chat with BearBot'
          onChange={(e) => setInput(e.target.value)}
          style={{
            color: 'black',       
            backgroundColor: 'white', 
            width: '100%',        
            padding: '5px',      
            borderRadius: '10px', 
          }}
        />
        <button
          onClick={handleSendMessage}
          type="submit" 
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20">
          Send
        </button>
      </div>

    </div>
  )
}
