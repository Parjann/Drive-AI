"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Contact = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <SectionWrapper id="contact" className="bg-white py-32 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-zinc-900 mb-6 tracking-tight">Contact Details</h2>
          <p className="text-lg text-zinc-500 font-light">
            We are here to assist you with every step of your journey. Reach out to our concierge or visit our flagship showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Address */}
          <div className="bg-zinc-50 rounded-2xl p-8 flex flex-col items-center text-center border border-zinc-100 hover:border-zinc-200 transition-colors">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-zinc-900">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-2">Showroom Location</h4>
            <p className="text-zinc-500">
              120 Premium Auto Boulevard<br />
              Cyber Hub, New Delhi 110021
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-zinc-50 rounded-2xl p-8 flex flex-col items-center text-center border border-zinc-100 hover:border-zinc-200 transition-colors">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-zinc-900">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-2">Phone Support</h4>
            <p className="text-zinc-500 mb-1">Sales: +91 98765 43210</p>
            <p className="text-zinc-500">Service: +91 98765 00000</p>
          </div>

          {/* Card 3: Mail */}
          <div className="bg-zinc-50 rounded-2xl p-8 flex flex-col items-center text-center border border-zinc-100 hover:border-zinc-200 transition-colors">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-zinc-900">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 mb-2">Email Address</h4>
            <p className="text-zinc-500 mb-1">concierge@driveai.com</p>
            <p className="text-zinc-500">support@driveai.com</p>
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="bg-zinc-950 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto overflow-hidden relative min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isSubscribed ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center justify-center text-center w-full"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  <h4 className="text-2xl font-bold text-white">You're on the list!</h4>
                </div>
                <p className="text-zinc-400">Thank you for subscribing. Keep an eye on your inbox.</p>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="flex flex-col md:flex-row items-center justify-between gap-8 w-full"
              >
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white mb-2">Join our newsletter</h4>
                  <p className="text-zinc-400">Receive early access to exclusive models and private track events.</p>
                </div>
                <form 
                  onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }} 
                  className="flex flex-col sm:flex-row w-full md:max-w-md gap-3 mt-4 md:mt-0"
                >
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full h-14 px-5 rounded-xl border border-zinc-700 bg-zinc-800/50 text-white placeholder-zinc-400 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner appearance-none"
                    required
                  />
                  <Button type="submit" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-wide border-none shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950">
                    Subscribe
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};
