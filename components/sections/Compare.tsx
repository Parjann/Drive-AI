import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Car } from "@/types";
import { Price } from "@/components/shared/Price";
import {
  Check, CircleDollarSign, Cog, Zap, CircleDashed,
  GitMerge, Route, Users, Fuel, Gauge, Clock,
  Package, Monitor, ShieldCheck, Star, Palette, Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CompareProps {
  cars: Car[];
  currency: 'INR' | 'USD';
  selectedIds?: string[];
  onCarChange?: (index: number, id: string) => void;
  onBook: (carId: string) => void;
}

export const Compare: React.FC<CompareProps> = ({ cars, currency, selectedIds = [], onCarChange, onBook }) => {
  // Always provide exactly 2 slots
  const compareSlots = [0, 1].map(index => {
    if (selectedIds[index]) {
      return cars.find(c => c.id === selectedIds[index]) || null;
    }
    return null;
  });

  const getWinnerBadge = (label: string) => (
    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-extrabold tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded ml-3 align-middle">
      <Star className="w-2.5 h-2.5 fill-emerald-400" /> {label}
    </span>
  );

  return (
    <SectionWrapper id="compare" className="bg-zinc-950 py-32 border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-tight">
          Compare <span className="text-blue-500">Top Models</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Select two cars from our fleet or ask the DriveAI assistant to start a detailed side-by-side comparison.
        </p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto overflow-hidden px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#13151a] border border-zinc-800 rounded-2xl shadow-2xl overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="p-4 md:p-8 border-r border-zinc-800 bg-[#13151a] w-[25%] align-top">
                    <div className="flex items-center gap-2 text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mt-4 md:mt-8">
                      <GitMerge className="w-4 h-4 md:w-5 md:h-5" /> <span className="hidden md:inline">FEATURES</span>
                    </div>
                  </th>
                  {compareSlots.map((car, index) => (
                    <th key={`header-${index}`} className="p-4 md:p-8 text-left border-r border-zinc-800 bg-[#13151a] w-[37.5%] last:border-r-0">
                      <div className="flex flex-col xl:flex-row gap-6 items-center text-center xl:text-left">
                        <div className="w-[180px] shrink-0 border border-zinc-800 border-dashed rounded-xl aspect-video flex items-center justify-center bg-zinc-900/50">
                          {car ? (
                            <img
                              src={car.compareImage}
                              alt={car.name}
                              className="w-full h-auto object-contain mix-blend-screen scale-110"
                              style={{ clipPath: 'inset(0 0 20% 0)' }}
                            />
                          ) : (
                            <span className="text-zinc-600 text-sm font-medium">No Vehicle</span>
                          )}
                        </div>
                        <div className="flex-1 space-y-2.5">
                          <h3 className="text-xl xl:text-2xl font-bold font-heading text-white">
                            {car ? car.name : "Select a Model"}
                          </h3>
                          <select
                            value={car?.id || ""}
                            onChange={(e) => onCarChange?.(index, e.target.value)}
                            className="bg-[#1a1c23] border border-zinc-700 text-zinc-300 font-medium text-sm rounded-lg px-2.5 py-1.5 outline-none cursor-pointer w-full max-w-[200px] hover:border-zinc-500 transition-colors"
                          >
                            <option value="" disabled>--- Choose ---</option>
                            {cars.map(c => (
                              <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                          </select>
                          <div className="pt-1">
                            {car ? (
                              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/20">
                                {car.type}
                              </span>
                            ) : (
                              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-transparent text-transparent select-none border border-transparent">
                                Placeholder
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-[15px]">

                {/* Starting Price */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><CircleDollarSign className="w-5 h-5 opacity-70" /></div> Starting Price
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const isWinner = car && otherCar && car.price < otherCar.price;
                    return (
                      <td key={`price-${i}`} className="p-5 font-bold text-zinc-200 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            <span className={cn(isWinner && "text-emerald-400")}><Price amount={car.price} currency={currency} /></span>
                            {isWinner && getWinnerBadge("Higher Value")}
                          </>
                        ) : <span className="text-zinc-600">-</span>}
                      </td>
                    );
                  })}
                </tr>

                {/* Engine */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Cog className="w-5 h-5 opacity-70" /></div> Engine
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`eng-${i}`} className="p-5 text-zinc-400 border-r border-zinc-800 last:border-r-0 text-center">
                      {car ? <span className="text-zinc-200">{car.specs.engine}</span> : "-"}
                    </td>
                  ))}
                </tr>

                {/* Power */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Zap className="w-5 h-5 opacity-70" /></div> Power
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const isWinner = car && otherCar && car.specs.powerValue > otherCar.specs.powerValue;
                    return (
                      <td key={`pow-${i}`} className="p-5 font-bold text-zinc-200 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            {car.specs.power}
                            {isWinner && getWinnerBadge("More Powerful")}
                          </>
                        ) : <span className="text-zinc-600 font-normal">-</span>}
                      </td>
                    );
                  })}
                </tr>

                {/* Torque */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><CircleDashed className="w-5 h-5 opacity-70" /></div> Torque
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const isWinner = car && otherCar && car.specs.torqueValue > otherCar.specs.torqueValue;
                    return (
                      <td key={`torq-${i}`} className="p-5 font-bold text-zinc-200 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            {car.specs.torque}
                            {isWinner && getWinnerBadge("More Torque")}
                          </>
                        ) : <span className="text-zinc-600 font-normal">-</span>}
                      </td>
                    );
                  })}
                </tr>

                {/* Transmission */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><GitMerge className="w-5 h-5 opacity-70" /></div> Transmission
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`trans-${i}`} className="p-5 text-zinc-400 border-r border-zinc-800 last:border-r-0 text-center">
                      {car ? <span className="text-zinc-200">{car.specs.transmission}</span> : "-"}
                    </td>
                  ))}
                </tr>

                {/* Drive Type */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Route className="w-5 h-5 opacity-70" /></div> Drive Type
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`drive-${i}`} className="p-5 text-zinc-400 border-r border-zinc-800 last:border-r-0 text-center">
                      {car ? <span className="text-zinc-200">{car.specs.driveType}</span> : "-"}
                    </td>
                  ))}
                </tr>

                {/* Seating Capacity */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Users className="w-5 h-5 opacity-70" /></div> Seating Capacity
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const isWinner = car && otherCar && car.seats > otherCar.seats;
                    return (
                      <td key={`seat-${i}`} className="p-5 font-bold text-zinc-200 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            {car.seats} Seater
                            {isWinner && getWinnerBadge("More Space")}
                          </>
                        ) : <span className="text-zinc-600 font-normal">-</span>}
                      </td>
                    );
                  })}
                </tr>

                {/* Fuel Type */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Fuel className="w-5 h-5 opacity-70" /></div> Fuel Type
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`fuel-${i}`} className="p-5 text-zinc-400 border-r border-zinc-800 last:border-r-0 text-center">
                      {car ? <span className="text-zinc-200">{car.type === 'EV' ? 'Electric' : 'Petrol / Diesel'}</span> : "-"}
                    </td>
                  ))}
                </tr>

                {/* Mileage */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Gauge className="w-5 h-5 opacity-70" /></div> Mileage
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const isWinner = car && otherCar && car.specs.mileageValue > otherCar.specs.mileageValue;
                    return (
                      <td key={`mil-${i}`} className="p-5 font-bold text-zinc-200 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            {car.specs.mileage}
                            {car.type !== 'EV' && isWinner && getWinnerBadge("Better Mileage")}
                            {car.type === 'EV' && getWinnerBadge("Eco-Friendly")}
                          </>
                        ) : <span className="text-zinc-600 font-normal">-</span>}
                      </td>
                    );
                  })}
                </tr>

                {/* 0-100 */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Clock className="w-5 h-5 opacity-70" /></div> 0-100 km/h
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const isWinner = car && otherCar && car.specs.accelerationValue < otherCar.specs.accelerationValue;
                    return (
                      <td key={`accel-${i}`} className="p-5 font-bold text-zinc-200 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            {car.specs.acceleration}
                            {isWinner && getWinnerBadge("Faster")}
                          </>
                        ) : <span className="text-zinc-600 font-normal">-</span>}
                      </td>
                    );
                  })}
                </tr>

                {/* Boot Space */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Package className="w-5 h-5 opacity-70" /></div> Boot Space
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const isWinner = car && otherCar && car.specs.bootSpaceValue > otherCar.specs.bootSpaceValue;
                    return (
                      <td key={`boot-${i}`} className="p-5 font-bold text-zinc-200 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            {car.specs.bootSpace}
                            {isWinner && getWinnerBadge("More Space")}
                          </>
                        ) : <span className="text-zinc-600 font-normal">-</span>}
                      </td>
                    );
                  })}
                </tr>

                {/* Infotainment */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Monitor className="w-5 h-5 opacity-70" /></div> Infotainment
                  </td>
                  {compareSlots.map((car, i) => {
                    const otherCar = compareSlots[i === 0 ? 1 : 0];
                    const val1 = car ? parseFloat(car.specs.infotainment) : 0;
                    const val2 = otherCar ? parseFloat(otherCar.specs.infotainment) : 0;
                    const isWinner = car && otherCar && val1 > val2;
                    return (
                      <td key={`info-${i}`} className="p-5 text-zinc-400 border-r border-zinc-800 last:border-r-0 text-center">
                        {car ? (
                          <>
                            <span className="text-zinc-200">{car.specs.infotainment}</span>
                            {isWinner && getWinnerBadge("Bigger Display")}
                          </>
                        ) : "-"}
                      </td>
                    );
                  })}
                </tr>

                {/* Safety */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><ShieldCheck className="w-5 h-5 opacity-70" /></div> Safety Rating
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`safe-${i}`} className="p-5 border-r border-zinc-800 last:border-r-0">
                      {car ? (
                        <div className="flex items-center justify-center gap-1.5">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className={cn("w-4 h-4", idx < car.specs.safetyRating ? "fill-amber-400 text-amber-400" : "fill-zinc-800 text-zinc-800")} />
                          ))}
                          <span className="text-zinc-400 ml-2">({car.specs.safetyRating} Star)</span>
                        </div>
                      ) : <div className="text-center text-zinc-600">-</div>}
                    </td>
                  ))}
                </tr>

                {/* Key Features */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 border-b-0 align-top pt-8">
                    <div className="flex items-center gap-4">
                      <div className="w-8 flex justify-center"><Star className="w-5 h-5 opacity-70" /></div> Key Features
                    </div>
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`kf-${i}`} className="p-8 text-zinc-500 border-r border-zinc-800 border-b-0 last:border-r-0 align-top">
                      {car ? (
                        <ul className="space-y-2 text-sm max-w-[300px] mx-auto text-left list-disc list-inside text-zinc-300">
                          {car.features.map(f => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      ) : <div className="text-center">-</div>}
                    </td>
                  ))}
                </tr>

                {/* Colors */}
                <tr className="group hover:bg-zinc-800/20 transition-colors">
                  <td className="p-5 font-medium text-zinc-400 border-r border-zinc-800 flex items-center gap-4">
                    <div className="w-8 flex justify-center"><Palette className="w-5 h-5 opacity-70" /></div> Colors Available
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`col-${i}`} className="p-5 border-r border-zinc-800 last:border-r-0">
                      {car ? (
                        <div className="flex items-center justify-center gap-3">
                          {car.specs.colors.map(color => (
                            <div
                              key={color}
                              className="w-6 h-6 rounded-full border border-zinc-600 shadow-inner"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      ) : <div className="text-center text-zinc-600">-</div>}
                    </td>
                  ))}
                </tr>

                {/* CTA Row */}
                <tr>
                  <td className="p-5 border-r border-zinc-800 flex items-center gap-4 bg-[#1a1c23] border-t border-zinc-800">
                    <div className="w-8 flex justify-center"><Calendar className="w-5 h-5 opacity-70 text-zinc-400" /></div> <span className="font-medium text-zinc-400">Action</span>
                  </td>
                  {compareSlots.map((car, i) => (
                    <td key={`cta-${i}`} className="p-6 text-center bg-[#1a1c23] border-r border-zinc-800 last:border-r-0 border-t">
                      {car ? (
                        <Button
                          className="w-full max-w-[250px] bg-blue-600 hover:bg-blue-500 text-white border-transparent"
                          onClick={() => onBook(car.id)}
                        >
                          Book Test Drive
                        </Button>
                      ) : (
                        <div className="w-full max-w-[250px] mx-auto h-10 border border-zinc-700 border-dashed rounded-lg flex items-center justify-center text-zinc-600 text-sm">
                          Selection Required
                        </div>
                      )}
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
