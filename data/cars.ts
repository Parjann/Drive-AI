import { Car } from '../types';

export const CARS: Car[] = [
  {
    id: "drivex-pro",
    name: "DriveX Pro",
    type: "SUV",
    price: 2500000,
    seats: 7,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop", // Placeholder image
    features: ["AWD", "Sunroof", "ADAS Level 2"]
  },
  {
    id: "drivex-max",
    name: "DriveX Max",
    type: "SUV",
    price: 3500000,
    seats: 7,
    image: "https://images.unsplash.com/photo-1533473359331-01f11467bdcd?q=80&w=2000&auto=format&fit=crop",
    features: ["4x4", "Panoramic Sunroof", "Ventilated Seats"]
  },
  {
    id: "aero-sedan",
    name: "Aero Sedan",
    type: "Sedan",
    price: 1800000,
    seats: 5,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",
    features: ["Cruise Control", "Leather Seats", "Wireless Charging"]
  },
  {
    id: "eco-hatch",
    name: "Eco Hatch",
    type: "Hatchback",
    price: 900000,
    seats: 5,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000&auto=format&fit=crop",
    features: ["High Mileage", "Compact", "Touchscreen"]
  },
  {
    id: "volt-ev",
    name: "Volt EV",
    type: "EV",
    price: 2200000,
    seats: 5,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",
    features: ["400km Range", "Fast Charging", "Autopilot"]
  },
  {
    id: "velocity-coupe",
    name: "Velocity Coupe",
    type: "Coupe",
    price: 4500000,
    seats: 2,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop",
    features: ["0-100 in 3s", "Carbon Fiber", "Sport Exhaust"]
  }
];
