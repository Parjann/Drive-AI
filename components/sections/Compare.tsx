import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Car } from "@/types";
import { Price } from "@/components/shared/Price";
import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface CompareProps {
  cars: Car[];
  currency: 'INR' | 'USD';
  selectedIds?: string[];
}

export const Compare: React.FC<CompareProps> = ({ cars, currency, selectedIds = [] }) => {
  const compareList = selectedIds.length > 0 
    ? selectedIds.map(id => cars.find(c => c.id === id)).filter(Boolean) as Car[]
    : cars.slice(0, 2);

  if (compareList.length === 0) return null;

  return (
    <SectionWrapper id="compare" className="bg-zinc-50 py-32">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 border-b border-r border-zinc-200 bg-zinc-50/50 w-[20%]" />
                  {compareList.map(car => (
                    <th key={`header-${car.id}`} className="p-8 text-center border-b border-zinc-200 bg-white min-w-[250px]">
                      <h3 className="text-xl font-bold font-heading text-zinc-900 mb-2">{car.name}</h3>
                      <p className="text-sm text-zinc-500 font-light max-w-[200px] mx-auto mb-6">
                        Experience the ultimate driving thrill with the {car.name}.
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-sm">
                <tr>
                  <td className="p-6 font-medium text-zinc-700 bg-white border-r border-zinc-200">Type</td>
                  {compareList.map(car => (
                    <td key={`type-${car.id}`} className="p-6 text-center text-zinc-600 bg-white">
                      {car.type}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700 bg-white border-r border-zinc-200">Seats</td>
                  {compareList.map(car => (
                    <td key={`seats-${car.id}`} className="p-6 text-center text-zinc-600 bg-white">
                      {car.seats}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-6 font-medium text-zinc-700 bg-white border-r border-zinc-200">Price</td>
                  {compareList.map(car => (
                    <td key={`price-${car.id}`} className="p-6 text-center text-zinc-900 font-bold bg-white">
                      <Price amount={car.price} currency={currency} />
                    </td>
                  ))}
                </tr>
                
                {['Sunroof', 'Adaptive Cruise Control', 'Ventilated Seats'].map(feature => (
                  <tr key={feature}>
                    <td className="p-6 font-medium text-zinc-700 bg-white border-r border-zinc-200">
                      {feature}
                    </td>
                    {compareList.map(car => {
                      const hasFeature = car.features.some(f => 
                        f.includes(feature) || 
                        (feature === 'Sunroof' && f.includes('Sunroof')) || 
                        (feature === 'Adaptive Cruise Control' && f.includes('ADAS'))
                      );
                      return (
                        <td key={`feat-${car.id}`} className="p-6 text-center bg-white">
                          <div className="flex justify-center">
                            {hasFeature ? <Check className="text-zinc-800 w-5 h-5" /> : <Minus className="text-zinc-300 w-5 h-5" />}
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
                
                {/* CTA Row like the example 'I want this' */}
                <tr>
                  <td className="p-6 bg-zinc-50/50 border-r border-zinc-200" />
                  {compareList.map(car => (
                    <td key={`cta-${car.id}`} className="p-6 text-center bg-zinc-50/50">
                      <Button 
                        variant="outline" 
                        className="w-full max-w-[200px] bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-900"
                        onClick={() => {
                          document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Book {car.name}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
