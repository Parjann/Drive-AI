import React from "react";
import { cn } from "@/lib/utils";

interface PriceProps {
  amount: number;
  currency: 'INR' | 'USD';
  className?: string;
}

export const Price: React.FC<PriceProps> = ({ amount, currency, className }) => {
  const convertedAmount = currency === 'USD' ? amount / 83 : amount;
  
  const formatted = new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0
  }).format(convertedAmount);

  return <span className={cn("inline-block", className)}>{formatted}</span>;
}
