import React from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 transition-all">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-zinc-950 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">D</span>
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-zinc-950">DriveAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Home</a>
          <a href="#models" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Models</a>
          <a href="#compare" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Compare</a>
          <a href="#booking" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Test Drive</a>
          <a href="#contact" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};
