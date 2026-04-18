import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-white py-24 border-t border-zinc-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-heading text-zinc-900 mb-6">Stay Connected</h2>
        <p className="text-lg text-zinc-500 mb-8 font-light">
          Subscribe to our newsletter for the latest updates on our next-gen vehicles.
        </p>
        <div className="flex max-w-md mx-auto gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 h-12 px-5 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-all shadow-sm"
          />
          <Button className="h-12 px-6 rounded-xl">Subscribe</Button>
        </div>
      </div>
    </SectionWrapper>
  );
};
