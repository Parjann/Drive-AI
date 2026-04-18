import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CarCard } from "@/components/ui/CarCard";
import { Car } from "@/types";
import { motion } from "framer-motion";

interface ModelsProps {
  cars: Car[];
  currency: 'INR' | 'USD';
  onBook: (carId: string) => void;
}

export const Models: React.FC<ModelsProps> = ({ cars, currency, onBook }) => {
  return (
    <SectionWrapper id="models" className="bg-zinc-50 py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="text-zinc-500 font-medium tracking-widest uppercase text-sm mb-4 block">Collection</span>
        <h2 className="text-5xl md:text-6xl font-bold font-heading text-zinc-900 mb-6 tracking-tight">Our Fleet</h2>
        <p className="text-xl text-zinc-500 leading-relaxed font-light">
          Masterpieces of engineering. Designed for those who demand more than just transportation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car) => (
          <CarCard 
            key={car.id} 
            car={car} 
            currency={currency}
            onBook={onBook}
          />
        ))}
      </div>
      
      {cars.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-24"
        >
          <p className="text-xl text-zinc-400 font-light tracking-wide">No models found matching your criteria.</p>
        </motion.div>
      )}
    </SectionWrapper>
  );
};
