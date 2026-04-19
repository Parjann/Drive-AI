import { Car } from '../types';

export const CARS: Car[] = [
  {
    id: "porsche-cayenne",
    name: "Porsche Cayenne",
    type: "SUV",
    price: 13500000,
    seats: 5,
    image: "/images/porsche-cayenne.png",
    compareImage: "/images/cayenne-iso.png",
    features: ["Panoramic Sunroof", "360° Camera", "Adaptive Cruise Control", "Wireless CarPlay & Android Auto"],
    specs: {
      engine: "3.0L V6 Turbo Petrol",
      power: "353 PS", powerValue: 353,
      torque: "500 Nm", torqueValue: 500,
      transmission: "8-Speed Tiptronic S",
      driveType: "AWD (All Wheel Drive)",
      mileage: "10.8 km/l", mileageValue: 10.8,
      acceleration: "6.0 sec", accelerationValue: 6.0,
      bootSpace: "772 Litres", bootSpaceValue: 772,
      infotainment: "12.3-inch PCM",
      safetyRating: 5,
      colors: ["#ffffff", "#000000", "#1E40AF", "#DC2626"] // white, black, blue, red
    }
  },
  {
    id: "range-rover",
    name: "Range Rover",
    type: "SUV",
    price: 23900000,
    seats: 7,
    image: "/images/drivex-max.png",
    compareImage: "/images/rover-iso.png",
    features: ["Panoramic Sunroof", "360° Camera", "Adaptive Cruise Control", "Ventilated Seats", "Meridian Premium Sound System"],
    specs: {
      engine: "3.0L Inline-6 Turbo Diesel",
      power: "350 PS", powerValue: 350,
      torque: "700 Nm", torqueValue: 700,
      transmission: "8-Speed Automatic",
      driveType: "AWD (All Wheel Drive)",
      mileage: "13.1 km/l", mileageValue: 13.1,
      acceleration: "6.1 sec", accelerationValue: 6.1,
      bootSpace: "1050 Litres", bootSpaceValue: 1050,
      infotainment: "13.1-inch Pivi Pro",
      safetyRating: 5,
      colors: ["#000000", "#ffffff", "#D1D5DB", "#1E40AF", "#064E3B"] // black, white, silver, blue, green
    }
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes S-Class",
    type: "Sedan",
    price: 18000000,
    seats: 5,
    image: "/images/mercedes-s-class.png",
    compareImage: "/images/benz-iso.png",
    features: ["Maybach Leather", "Rear Seat Entertainment", "Burmester 4D Audio", "Magic Body Control"],
    specs: {
      engine: "3.0L Inline-6 Mild Hybrid",
      power: "367 PS", powerValue: 367,
      torque: "500 Nm", torqueValue: 500,
      transmission: "9G-TRONIC Automatic",
      driveType: "RWD",
      mileage: "12.5 km/l", mileageValue: 12.5,
      acceleration: "5.1 sec", accelerationValue: 5.1,
      bootSpace: "550 Litres", bootSpaceValue: 550,
      infotainment: "12.8-inch OLED MBUX",
      safetyRating: 5,
      colors: ["#000000", "#ffffff", "#D1D5DB"] // black, white, silver
    }
  },
  {
    id: "vw-golf-r",
    name: "VW Golf R",
    type: "Hatchback",
    price: 5500000,
    seats: 5,
    image: "/images/vw-golf.png",
    compareImage: "/images/golf-iso.png",
    features: ["Performance Pack", "Drift Mode", "Akrapovic Exhaust", "IQ.LIGHT Matrix LED"],
    specs: {
      engine: "2.0L TSI 4-Cylinder Turbo",
      power: "320 PS", powerValue: 320,
      torque: "420 Nm", torqueValue: 420,
      transmission: "7-Speed DSG",
      driveType: "4MOTION (AWD)",
      mileage: "14.2 km/l", mileageValue: 14.2,
      acceleration: "4.7 sec", accelerationValue: 4.7,
      bootSpace: "374 Litres", bootSpaceValue: 374,
      infotainment: "10-inch Discover Pro",
      safetyRating: 5,
      colors: ["#1E40AF", "#ffffff", "#000000"]
    }
  },
  {
    id: "tesla-model-s",
    name: "Tesla Model S Plaid",
    type: "EV",
    price: 15000000,
    seats: 5,
    image: "/images/tesla-model-s.png",
    compareImage: "/images/tesla-iso.png",
    features: ["Autopilot", "Yoke Steering", "Plaid Track Mode", "22-Speaker Audio"],
    specs: {
      engine: "Tri Motor AWD",
      power: "1020 PS", powerValue: 1020,
      torque: "1420 Nm", torqueValue: 1420,
      transmission: "1-Speed Fixed Gear",
      driveType: "Tri-Motor AWD",
      mileage: "600 km Range", mileageValue: 600,
      acceleration: "2.1 sec", accelerationValue: 2.1,
      bootSpace: "793 Litres", bootSpaceValue: 793,
      infotainment: "17-inch Cinematic Display",
      safetyRating: 5,
      colors: ["#4B5563", "#000000", "#ffffff", "#DC2626"] // silver, black, white, red
    }
  },
  {
    id: "aston-martin-vantage",
    name: "Aston Martin Vantage",
    type: "Coupe",
    price: 32000000,
    seats: 2,
    image: "/images/aston-martin.png",
    compareImage: "/images/aston-iso.png",
    features: ["Carbon Fiber Detail", "Adaptive Damping", "Sport Exhaust", "Track Telemetry"],
    specs: {
      engine: "4.0L Twin-Turbo V8",
      power: "665 PS", powerValue: 665,
      torque: "800 Nm", torqueValue: 800,
      transmission: "8-Speed ZF Automatic",
      driveType: "RWD",
      mileage: "8.5 km/l", mileageValue: 8.5,
      acceleration: "3.5 sec", accelerationValue: 3.5,
      bootSpace: "346 Litres", bootSpaceValue: 346,
      infotainment: "10.25-inch Touchscreen",
      safetyRating: 5,
      colors: ["#D1D5DB", "#166534", "#000000"] // silver, green, black
    }
  }
];
