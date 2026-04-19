"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Models", href: "#models" },
    { name: "Compare", href: "#compare" },
    { name: "Test Drive", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/50 transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer relative z-[60]">
            <div className="w-8 h-8 bg-zinc-950 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none">D</span>
            </div>
            <span className="text-xl font-bold font-heading tracking-tight text-zinc-950">DriveAI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden p-2 text-zinc-900 relative z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden flex flex-col gap-6 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="text-3xl font-heading font-bold text-zinc-900 border-b border-zinc-100 pb-4"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="mt-8">
              <p className="text-sm font-medium text-zinc-500 mb-2">DriveAI Concierge</p>
              <a href="tel:+919876543210" className="text-lg font-bold text-blue-600">+91 98765 43210</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
