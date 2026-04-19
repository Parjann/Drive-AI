"use client";

import React, { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Car as CarIcon, CheckCircle2 } from "lucide-react";

interface BookingFormProps {
  preFill?: {
    car?: string;
    date?: string;
    time?: string;
    city?: string;
  };
  onReset?: () => void;
}

export const Booking: React.FC<BookingFormProps> = ({ preFill, onReset }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
          <div className="relative bg-white border border-zinc-100 rounded-3xl p-10 shadow-xl shadow-zinc-200/40 min-h-[480px] flex flex-col justify-center">

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center text-center py-4"
                >
                  <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
                  <h3 className="text-2xl font-bold font-heading mb-3">Reservation Confirmed!</h3>
                  <p className="text-zinc-500 mb-8 max-w-sm">
                    Your luxury test drive has been successfully scheduled. Our concierge will contact you shortly to confirm the final showroom details.
                  </p>
                  <Button onClick={() => { setIsSubmitted(false); onReset?.(); }} className="px-8 bg-zinc-900 border-none hover:bg-zinc-800 text-white rounded-xl">
                    Book Another Test Drive
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold font-heading mb-8">Reservation Details</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-zinc-700 tracking-wide">Vehicle Model</label>
                      <input
                        type="text"
                        defaultValue={preFill?.car || ""}
                        placeholder="e.g. Porsche Cayenne"
                        className="w-full h-14 px-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-800 font-medium"
                        required
                      />
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1 space-y-3">
                        <label className="text-sm font-semibold text-zinc-700 tracking-wide">Date</label>
                        <input
                          type="date"
                          defaultValue={preFill?.date || ""}
                          className="w-full h-14 px-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-zinc-500 focus:text-zinc-800"
                          required
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <label className="text-sm font-semibold text-zinc-700 tracking-wide">Time</label>
                        <select
                          className="w-full h-14 px-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-zinc-500 focus:text-zinc-800 appearance-none bg-no-repeat"
                          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke-width=\'2\' stroke=\'%2371717a\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.2rem' }}
                          key={preFill?.time || "default"}
                          defaultValue={preFill?.time || "10:00 AM"}
                          required
                        >
                          <option value="" disabled>Select Time</option>
                          {["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"].map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-zinc-700 tracking-wide">City</label>
                      <input
                        type="text"
                        defaultValue={preFill?.city || ""}
                        placeholder="e.g. New Delhi"
                        className="w-full h-14 px-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-800 font-medium"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full h-14 text-lg mt-4 rounded-xl shadow-md bg-blue-600 hover:bg-blue-500 text-white border-transparent">
                      Confirm Reservation
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
