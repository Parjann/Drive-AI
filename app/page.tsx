"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Models } from "@/components/sections/Models";
import { Compare } from "@/components/sections/Compare";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { ChatAssistant } from "@/components/ai/ChatAssistant";
import { CARS } from "@/data/cars";

export default function Home() {
  // Page State managed actively
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedCarsToCompare, setSelectedCarsToCompare] = useState<string[]>([]);
  const [bookingPrefill, setBookingPrefill] = useState<{car?: string; date?: string; city?: string}>({});

  const filteredCars = activeFilter 
    ? CARS.filter(c => c.type.toLowerCase() === activeFilter.toLowerCase())
    : CARS;

  const handleBook = (carId: string) => {
    const car = CARS.find(c => c.id === carId);
    if (car) {
      setBookingPrefill({ car: car.name });
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCompare = (carId: string) => {
    setSelectedCarsToCompare(prev => {
      // Keep max 2 cars
      if (prev.includes(carId)) return prev;
      const updated = [...prev, carId].slice(-2);
      if (updated.length === 2) {
        document.getElementById('compare')?.scrollIntoView({ behavior: 'smooth' });
      }
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-white selection:bg-zinc-900 selection:text-white">
      <Navbar />
      
      {/* Structural Order Requested by User */}
      <Hero />
      <Models cars={filteredCars} currency={currency} onBook={handleBook} />
      <Compare cars={CARS} currency={currency} selectedIds={selectedCarsToCompare} />
      <Booking preFill={bookingPrefill} />
      <Contact />
      
      {/* Floating Elements */}
      <ChatAssistant />
      
      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-8 text-center text-sm font-light">
        <p>© 2026 DriveAI by The DeepMind AI Coding Assistant. All rights reserved.</p>
      </footer>
    </main>
  );
}
