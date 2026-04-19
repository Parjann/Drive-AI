export type CarType = 'SUV' | 'Sedan' | 'Hatchback' | 'Coupe' | 'EV';

export interface CarSpecs {
  engine: string;
  power: string;
  powerValue: number;
  torque: string;
  torqueValue: number;
  transmission: string;
  driveType: string;
  mileage: string;
  mileageValue: number;
  acceleration: string;
  accelerationValue: number;
  bootSpace: string;
  bootSpaceValue: number;
  infotainment: string;
  safetyRating: number;
  colors: string[];
}

export interface Car {
  id: string;
  name: string;
  type: CarType;
  price: number;
  seats: number;
  image: string;
  compareImage: string;
  features: string[];
  specs: CarSpecs;
}

export type AIActionType = 'FILTER' | 'COMPARE' | 'BOOK' | 'NAVIGATE' | 'CURRENCY' | 'RECOMMEND' | 'UNKNOWN';

export interface AIAction {
  action: AIActionType;
  message: string;
  type?: string;
  price?: number;
  cars?: string[];
  car?: string;
  date?: string;
  time?: string;
  city?: string;
  section?: string;
  currency?: 'INR' | 'USD';
}
