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
