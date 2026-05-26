"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, ChevronRight } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const quickQuestions = [
  "Can I soundproof a door in my Airbnb apartment?",
  "Can I soundproof my boardroom?",
  "Is there a product I can put over my windows to stop road noise?",
  "Do egg cartons work for soundproofing?",
  "What is soundproofing?",
  "Soundproofing vs acoustic treatment?",
  "How do I reduce generator noise?",
  "What is a site visit?",
  "Do you work outside Cape Town?",
  "How much does soundproofing cost?",
];

export default function ZolaBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'register' | 'chat'>('register');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [regError, setRegError] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleRegister = () => {
    if (!name.trim() || !phone.trim()) {
      setRegError('Please enter your name and phone number to continue.');
      return;
    }
    setRegError('');
    setStep('chat');
    setMessages([{
      role: 'assistant',
      content: `Hi ${name.split(' ')[0]}! 👋 I'm Zola, Supersonic Customs' assistant. What can I help you with today?`
    }]);
  };

  const send = async (text?: string) => {
    const msgText = text || input.trim();
    if (!msgText || loading) return;
    const userMsg: Message = { role: 'user', content: msgText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/zola', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          contact: { name, phone, email }
        }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply || 'Sorry, something went wrong. Please WhatsApp us on +27 76 770 2767.'
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I had a hiccup! Please WhatsApp us on +27 76 770 2767.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" style={{ height: '520px' }}>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">Z</div>
              <div>
                <p className="text-white font-semibold text-sm">Zola</p>
                <p className="text-blue-200 text-xs">Supersonic Customs Assistant</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* STEP 1 — Registration */}
          {step === 'register' && (
            <div className="flex-1 flex flex-col p-5 overflow-y-auto">
              <p className="text-gray-700 text-sm font-semibold mb-1">Before we chat 👋</p>
              <p className="text-gray-500 text-xs mb-4">Please leave your details so our team can follow up if needed.</p>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Full Name *</label>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full bg-gray-50 text-gray-900 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Phone / WhatsApp *</label>
                  <input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="e.g. 076 770 2767"
                    className="w-full bg-gray-50 text-gray-900 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1 block">Email <span className="text-gray-400">(optional)</span></label>
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. john@email.com"
                    className="w-full bg-gray-50 text-gray-900 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {regError && <p className="text-red-500 text-xs mt-2">{regError}</p>}

              <button
                onClick={handleRegister}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Start Chat <ChevronRight className="w-4 h-4" />
              </button>

              <p className="text-gray-400 text-xs text-center mt-3">Your details are kept private and only used to assist you.</p>
            </div>
          )}

          {/* STEP 2 — Chat */}
          {step === 'chat' && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {msg.content.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*/g, '')}
                    </div>
                    {msg.role === 'assistant' && i > 0 && (
                      <a href="/book-site-visit"
                        className="mt-1 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-medium transition-colors">
                        📅 Book a Site Visit
                      </a>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-3 py-2 rounded-xl rounded-bl-none">
                      <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Quick Questions */}
              {messages.length < 3 && (
                <div className="px-3 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                  {quickQuestions.map(q => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-600 border border-gray-200 px-2.5 py-1.5 rounded-full transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="p-3 border-t border-gray-100 flex gap-2 flex-shrink-0">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  placeholder="Ask about soundproofing..."
                  className="flex-1 bg-white text-gray-900 text-sm px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 placeholder-gray-400"
                />
                <button onClick={() => send()} disabled={loading || !input.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white p-2 rounded-xl transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-4 right-4 md:right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Chat with Zola"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
