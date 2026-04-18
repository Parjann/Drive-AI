import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Car } from "@/types";
import { Price } from "@/components/shared/Price";
import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

interface CompareProps {
  cars: Car[];
  currency: 'INR' | 'USD';
  selectedIds?: string[];
}

export const Compare: React.FC<CompareProps> = ({ cars, currency, selectedIds = [] }) => {
  // If no specific IDs provided, take the first two for demo.
  const compareList = selectedIds.length > 0 
    ? selectedIds.map(id => cars.find(c => c.id === id)).filter(Boolean) as Car[]
    : cars.slice(0, 2);

  if (compareList.length === 0) return null;

  return (
    <SectionWrapper id="compare" className="bg-white py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="text-emerald-600 font-medium tracking-widest uppercase text-sm mb-4 block">Analysis</span>
        <h2 className="text-5xl font-bold font-heading text-zinc-900 mb-6 tracking-tight">Compare Models</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-zinc-100 rounded-3xl overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-[1fr_repeat(auto-fill,minmax(250px,1fr))] divide-x divide-zinc-100 bg-zinc-50/50">
            {/* Header Column */}
            <div className="p-8 flex items-center justify-center bg-white">
              <span className="text-zinc-400 font-medium tracking-wider uppercase text-sm">Specs</span>
            </div>
            {/* Car Name Headers */}
            {compareList.map(car => (
              <div key={`header-${car.id}`} className="p-8 text-center bg-white">
                <img src={car.image} alt={car.name} className="w-full h-32 object-cover rounded-xl mb-6 shadow-sm" />
                <h3 className="text-2xl font-bold font-heading text-zinc-900">{car.name}</h3>
                <Price amount={car.price} currency={currency} className="text-zinc-500 font-medium text-lg mt-2" />
              </div>
            ))}
          </div>

          <div className="divide-y divide-zinc-100 bg-white">
            {/* Body Type */}
            <div className="grid grid-cols-[1fr_repeat(auto-fill,minmax(250px,1fr))] divide-x divide-zinc-100">
              <div className="p-6 font-medium text-zinc-600 flex items-center">Body Type</div>
              {compareList.map(car => (
                <div key={`type-${car.id}`} className="p-6 text-center text-zinc-900 font-medium">{car.type}</div>
              ))}
            </div>
            {/* Seating */}
            <div className="grid grid-cols-[1fr_repeat(auto-fill,minmax(250px,1fr))] divide-x divide-zinc-100">
              <div className="p-6 font-medium text-zinc-600 flex items-center">Seating Capacity</div>
              {compareList.map(car => (
                <div key={`seat-${car.id}`} className="p-6 text-center text-zinc-900">{car.seats} Adults</div>
              ))}
            </div>
            {/* Features (Checking top common features arbitrarily) */}
            {['Sunroof', 'Adaptive Cruise Control', 'Ventilated Seats'].map(feature => (
              <div key={feature} className="grid grid-cols-[1fr_repeat(auto-fill,minmax(250px,1fr))] divide-x divide-zinc-100">
                <div className="p-6 font-medium text-zinc-600 flex items-center">{feature}</div>
                {compareList.map(car => {
                  const hasFeature = car.features.some(f => f.includes(feature) || (feature === 'Sunroof' && f.includes('Sunroof')) || (feature === 'Adaptive Cruise Control' && f.includes('ADAS')));
                  return (
                    <div key={`feat-${car.id}`} className="p-6 flex items-center justify-center">
                      {hasFeature ? <Check className="text-emerald-500 w-5 h-5" /> : <Minus className="text-zinc-300 w-5 h-5" />}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
