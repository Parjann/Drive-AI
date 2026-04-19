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
import { AIAction } from "@/types";

export default function Home() {
  // Page State managed actively
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [selectedCarsToCompare, setSelectedCarsToCompare] = useState<string[]>([]);
  const [bookingPrefill, setBookingPrefill] = useState<{ car?: string; date?: string; time?: string; city?: string }>({});
  const [isChatOpen, setIsChatOpen] = useState(false);

  const filteredCars = CARS.filter(c => {
    if (activeFilter && c.type.toLowerCase() !== activeFilter.toLowerCase()) return false;
    if (maxPrice && c.price > maxPrice) return false;
    return true;
  });

  const scrollToAndHighlight = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.classList.add('flash-highlight');
      setTimeout(() => el.classList.remove('flash-highlight'), 1000);
    }
  };

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
        scrollToAndHighlight('compare');
      }
      return updated;
    });
  };

  const handleAIAction = (payload: AIAction) => {
    if (payload.action === 'NAVIGATE' && payload.section) {
      scrollToAndHighlight(payload.section.toLowerCase());
    }
    
    if (payload.action === 'FILTER') {
      if (payload.type) setActiveFilter(payload.type);
      if (payload.price) setMaxPrice(payload.price);
      setTimeout(() => scrollToAndHighlight('models'), 100);
    }

    if (payload.action === 'CURRENCY' && payload.currency) {
      setCurrency(payload.currency);
      setTimeout(() => scrollToAndHighlight('models'), 100);
    }

    if (payload.action === 'COMPARE' && payload.cars) {
      const mappedIds = payload.cars.map(c => {
        const found = CARS.find(car => car.id.toLowerCase() === c.toLowerCase() || car.name.toLowerCase().includes(c.toLowerCase()));
        return found ? found.id : c;
      });
      setSelectedCarsToCompare(mappedIds.slice(0, 2));
      setTimeout(() => scrollToAndHighlight('compare'), 100);
    }

    if (payload.action === 'BOOK') {
      setBookingPrefill({
        car: payload.car,
        date: payload.date,
        time: payload.time,
        city: payload.city
      });
      setTimeout(() => scrollToAndHighlight('booking'), 100);
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-zinc-900 selection:text-white">
      <Navbar />

      {/* Structural Order Requested by User */}
      <Hero onOpenChat={() => setIsChatOpen(true)} />
      <Models cars={filteredCars} currency={currency} onBook={handleBook} onCompare={handleCompare} />
      <Compare 
        cars={CARS} 
        currency={currency} 
        selectedIds={selectedCarsToCompare} 
        onCarChange={(index, id) => {
          setSelectedCarsToCompare(prev => {
            const next = prev.length ? [...prev] : [CARS[0].id, CARS[1].id];
            next[index] = id;
            return next;
          });
        }}
        onBook={handleBook}
      />
      <Booking preFill={bookingPrefill} onReset={() => setBookingPrefill({})} />
      <Contact />

      {/* Floating Elements */}
      <ChatAssistant isOpen={isChatOpen} setIsOpen={setIsChatOpen} onAction={handleAIAction} />

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-8 text-center text-sm font-light">
        <p>© 2026 DriveAI.All rights reserved.</p>
      </footer>
    </main>
  );
}
