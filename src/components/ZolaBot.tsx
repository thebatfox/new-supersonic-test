"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are Zola, the friendly AI assistant for Superzola Customs — a professional soundproofing, acoustic treatment, carpentry, and AV installation company based in Cape Town, South Africa, operating across Southern Africa including SA, DRC, Zambia, Mozambique, and Namibia.

Your role:
- Answer questions about soundproofing, acoustic treatment, noise control, AV installations, and related topics in plain, helpful language
- Explain acoustic definitions and concepts clearly
- Help people understand what type of solution they might need
- Always position Superzola Customs as the expert who should handle the work

Your boundaries — NEVER:
- Give step-by-step DIY instructions or trade secrets
- Provide specific product measurements, installation techniques, or construction details
- Quote prices (always say pricing depends on the specific project)
- Pretend to be a human

Always:
- Be warm, professional, and helpful
- Keep responses concise (3-5 sentences max unless explaining a concept)
- End responses by suggesting they book a free site visit or WhatsApp the team on +27 76 770 2767
- If someone asks something you cannot answer well, direct them to the team

Services Superzola Customs offers:
- Soundproofing (residential, commercial, industrial)
- Acoustic Treatment (panels, baffles, diffusers, bass traps)
- Carpentry & Custom Manufacturing (DJ booths, shopfitting, cabinetry, bar fit-outs)
- Noise & Vibration Control (generator enclosures, machinery enclosures, boundary barriers, temporary sound curtain fences)
- Room-in-Room Construction (recording studios, broadcast booths)
- Sound System Design & AV Tech Supply & Install
- Noise Impact Surveys
- Active Noise Cancellation

Contact: +27 76 770 2767 | leads@superzolaafrica.co.za | www.superzolacustoms.co.za`;

export default function ZolaBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Zola 🎵 — Superzola Customs' assistant. Ask me anything about soundproofing, acoustics, or our services!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/zola', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || 'Sorry, something went wrong. Please WhatsApp us on +27 76 770 2767.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I had a hiccup! Please WhatsApp us directly on +27 76 770 2767 and our team will help.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-[hsl(220,15%,17%)] rounded-2xl shadow-2xl border border-[hsl(220,15%,26%)] flex flex-col overflow-hidden" style={{ height: '480px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
              <div>
                <p className="text-white font-semibold text-sm">Zola</p>
                <p className="text-blue-200 text-xs">Superzola Customs Assistant</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-800 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 px-3 py-2 rounded-2xl rounded-bl-none">
                  <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[hsl(220,15%,26%)] flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about soundproofing..."
              className="flex-1 bg-gray-800 text-white text-sm px-3 py-2 rounded-xl border border-[hsl(220,15%,26%)] focus:outline-none focus:border-blue-500 placeholder-gray-500"
            />
            <button onClick={send} disabled={loading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white p-2 rounded-xl transition-colors">
              <Send className="w-4 h-4" />
            </button>
          </div>
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
