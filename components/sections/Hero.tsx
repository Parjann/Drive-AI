import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1614200187524-706782559cc8?q=80&w=3000&auto=format&fit=crop" 
          alt="Luxury Car" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/20" />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold font-heading text-white mb-6 tracking-tighter leading-tight drop-shadow-sm">
            The Shape of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Motion.</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light tracking-wide"
        >
          Experience intelligent driving powered by our next-gen AI assistant. No clicks needed—just command.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Button size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-full px-8 h-14 text-lg w-full sm:w-auto">
            View Collection
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 bg-zinc-900/30 text-white hover:bg-zinc-800 hover:text-white backdrop-blur-md rounded-full px-8 h-14 text-lg w-full sm:w-auto">
            Talk to AI Assistant
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
