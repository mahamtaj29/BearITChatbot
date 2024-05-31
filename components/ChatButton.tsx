"use client";
import React from 'react'
import { useState } from 'react';
import { ChatBot } from './ChatBot';

export const ChatButton: React.FC = () => {
    const [openChat, setOpenChat] = useState(false);
    const openChatBot = () => {
        setOpenChat(!openChat);
    };

  return (
    <div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg" 
        onClick={openChatBot}> Start Chat </button>
    {/* It will open the ChatWindow only when button is clicked */}
    { openChat && <ChatBot />}
        </div>
  )
}
