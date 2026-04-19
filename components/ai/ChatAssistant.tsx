import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { AIAction } from "@/types";

interface Message {
  id: string;
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatAssistantProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  onAction: (payload: AIAction) => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ isOpen, setIsOpen, onAction }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-msg',
      role: 'assistant',
      content: 'Hello! I\'m your DriveAI assistant. You don\'t have to click around—just ask me to do it. Try saying "Show SUVs under 3 crore" or "Compare Porsche Cayenne and Mercedes S-Class".'
    }
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userQ = input.trim();
    setInput("");

    const newMsg: Message = { id: Date.now().toString(), role: 'user', content: userQ };
    setMessages(prev => [...prev, newMsg]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: userQ })
      });

      const payload: AIAction = await res.json();

      if (payload.message) {
        setMessages(prev => [...prev, { id: Date.now().toString() + "-ai", role: 'assistant', content: payload.message }]);
      } else {
        setMessages(prev => [...prev, { id: Date.now().toString() + "-ai", role: 'assistant', content: "Action completed." }]);
      }

      onAction(payload);
    } catch (e) {
      console.error(e);
      setMessages(prev => [...prev, { id: Date.now().toString() + "-err", role: 'system', content: "Network error calling AI API." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 right-4 left-4 sm:absolute sm:bottom-20 sm:right-0 sm:left-auto w-auto sm:w-[400px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden flex flex-col z-[100]"
            >
              {/* Header */}
              <div className="bg-zinc-950 p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">DriveAI Assistant</h4>
                  <p className="text-zinc-400 text-xs">Powered by Groq</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Area */}
              <div ref={scrollRef} className="h-[350px] bg-zinc-50 p-5 flex flex-col gap-4 overflow-y-auto">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-2xl shadow-sm text-sm border ${msg.role === 'user'
                      ? 'bg-zinc-900 text-white border-zinc-800 self-end rounded-tr-sm max-w-[85%]'
                      : msg.role === 'system'
                        ? 'bg-red-50 text-red-600 border-red-100 self-center max-w-full text-center'
                        : 'bg-white text-zinc-700 border-zinc-100 self-start rounded-tl-sm max-w-[85%]'
                      }`}
                  >
                    {msg.content}
                  </div>
                ))}
                {isLoading && (
                  <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-100 self-start">
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-zinc-100">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="w-full h-12 pl-4 pr-12 rounded-xl bg-zinc-100 border-none focus:ring-2 focus:ring-zinc-900/10 text-sm transition-all outline-none"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-900 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative group">
          {!isOpen && (
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75 group-hover:opacity-100 transition-opacity"></div>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-10 w-16 h-16 rounded-full text-white flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-colors border ${isOpen ? 'bg-zinc-950 border-zinc-800' : 'bg-gradient-to-tr from-zinc-950 to-blue-900 border-blue-500/50'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 text-blue-100" />}
          </motion.button>
        </div>
      </div>
    </>
  );
};
