export type CarType = 'SUV' | 'Sedan' | 'Hatchback' | 'Coupe' | 'EV';

export interface Car {
  id: string;
  name: string;
  type: CarType;
  price: number; 
  seats: number;
  image: string;
  features: string[];
}

export type AIActionType = 'FILTER' | 'COMPARE' | 'BOOK' | 'NAVIGATE' | 'CURRENCY' | 'RECOMMEND' | 'UNKNOWN';

export interface AIAction {
  action: AIActionType;
  message: string;
  
  // Specific action payloads
  type?: string;          // For FILTER (e.g. SUV)
  price?: number;         // For FILTER (e.g. 2000000)
  cars?: string[];        // For COMPARE (names/ids)
  car?: string;           // For BOOK
  date?: string;          // For BOOK
  city?: string;          // For BOOK
  section?: string;       // For NAVIGATE
  currency?: 'INR'|'USD'; // For CURRENCY
}
