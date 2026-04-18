import React from "react";
import { Car } from "@/types";
import { Price } from "@/components/shared/Price";
import { Button } from "./Button";
import { Users, Fuel, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface CarCardProps {
  car: Car;
  currency: 'INR' | 'USD';
  onBook?: (carId: string) => void;
  onCompare?: (carId: string) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, currency, onBook, onCompare }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-zinc-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold font-heading text-zinc-900 tracking-tight">{car.name}</h3>
            <p className="text-zinc-500 font-medium">{car.type}</p>
          </div>
          <Price amount={car.price} currency={currency} className="text-xl font-bold text-zinc-900" />
        </div>
        
        <div className="flex items-center gap-4 text-zinc-600 text-sm mb-8">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-zinc-400" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-300" />
          <div className="flex items-center gap-2">
            {car.type === 'EV' ? <Zap className="w-4 h-4 text-emerald-500" /> : <Fuel className="w-4 h-4 text-zinc-400" />}
            <span>{car.type === 'EV' ? 'Electric' : 'Petrol'}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {car.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="text-xs px-3 py-1.5 bg-zinc-50 text-zinc-600 rounded-full font-medium border border-zinc-100">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 rounded-xl h-12" onClick={() => onBook?.(car.id)}>
            Book Now
          </Button>
          <Button variant="outline" className="px-4 rounded-xl h-12" onClick={() => onCompare?.(car.id)}>
            Compare
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
