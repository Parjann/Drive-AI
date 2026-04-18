import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

interface ChatAssistantProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ isOpen, setIsOpen }) => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-[350px] bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-zinc-950 p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">DriveAI Assistant</h4>
                  <p className="text-zinc-400 text-xs">Always ready to command the UI</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="h-[300px] bg-zinc-50 p-5 flex flex-col gap-4 overflow-y-auto">
                <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm text-zinc-700 border border-zinc-100 self-start max-w-[85%]">
                  Hello! I'm your DriveAI assistant. You don't have to click around—just ask me to do it. Try saying <strong>"Show SUVs under 20 lakhs"</strong> or <strong>"Compare DriveX Pro and Aero Sedan"</strong>.
                </div>
                {/* Dynamically injected messages will go here */}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-zinc-100">
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="w-full h-12 pl-4 pr-12 rounded-xl bg-zinc-100 border-none focus:ring-2 focus:ring-zinc-900/10 text-sm transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-zinc-900 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors">
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-zinc-950 text-white flex items-center justify-center shadow-xl shadow-zinc-900/20"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
};
