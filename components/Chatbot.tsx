
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/gemini';
import { Message } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Trivium Strategist active. How can I assist your deployment today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(input, messages);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Signal lost. Attempting reconnection..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
            {part.includes('strategy-call') ? 'Schedule Architect Call' : part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
        >
          <i className="fa-solid fa-sparkles text-lg"></i>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 md:w-[400px] h-[600px] bg-white border border-slate-200 rounded-[2rem] flex flex-col shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden animate-scale-up">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-microchip text-white text-xs"></i>
              </div>
              <div>
                <p className="text-slate-900 font-bold text-xs">Architectural AI</p>
                <p className="text-slate-500 text-[9px] uppercase tracking-widest font-black">Active Context</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-white">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white font-medium shadow-md' 
                    : 'bg-slate-50 text-slate-700 border border-slate-100'
                }`}>
                  {renderMessageText(m.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How can we help?"
              className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-indigo-300 text-slate-900 placeholder:text-slate-400 font-medium"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <i className="fa-solid fa-arrow-up-long"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
