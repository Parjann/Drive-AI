import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Calendar, MapPin, Car as CarIcon } from "lucide-react";

interface BookingFormProps {
  preFill?: {
    car?: string;
    date?: string;
    city?: string;
  };
}

export const Booking: React.FC<BookingFormProps> = ({ preFill }) => {
  return (
    <SectionWrapper id="booking" className="bg-zinc-50 py-32">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <span className="text-blue-600 font-medium tracking-widest uppercase text-sm mb-4 block">Experience</span>
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-zinc-900 mb-8 tracking-tight">Book a Test Drive</h2>
          <p className="text-xl text-zinc-500 mb-12 font-light leading-relaxed">
            Get behind the wheel of your dream vehicle. Schedule a personalized test drive at your nearest DriveAI center.
          </p>
          
          <div className="space-y-8">
            {[
              { icon: CarIcon, title: "Select Model", desc: "Choose your preferred vehicle from our luxury fleet." },
              { icon: Calendar, title: "Pick a Schedule", desc: "Select a date and time that works best for you." },
              { icon: MapPin, title: "Nearest Dealership", desc: "We'll prepare the car at your closest DriveAI lounge." }
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex flex-shrink-0 items-center justify-center text-zinc-900 shadow-sm mt-1">
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900">{step.title}</h4>
                  <p className="text-zinc-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 w-full max-w-lg relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-emerald-400/10 rounded-[40px] blur-2xl" />
          <div className="relative bg-white border border-zinc-100 rounded-3xl p-10 shadow-xl shadow-zinc-200/40">
            <h3 className="text-2xl font-bold font-heading mb-8">Reservation Details</h3>
            <form className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-zinc-700 tracking-wide">Vehicle Model</label>
                <input 
                  type="text" 
                  defaultValue={preFill?.car || ""} 
                  placeholder="e.g. DriveX Pro"
                  className="w-full h-14 px-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-zinc-700 tracking-wide">Preferred Date</label>
                <input 
                  type="text" 
                  defaultValue={preFill?.date || ""} 
                  placeholder="e.g. Saturday, 10 AM"
                  className="w-full h-14 px-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-zinc-700 tracking-wide">City</label>
                <input 
                  type="text" 
                  defaultValue={preFill?.city || ""} 
                  placeholder="e.g. Kochi"
                  className="w-full h-14 px-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <Button className="w-full h-14 text-lg mt-4 rounded-xl shadow-md">
                Confirm Reservation
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
