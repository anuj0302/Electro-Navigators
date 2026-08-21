import dotenv from "dotenv";

import connectDB from "../db/db.js";

import Station from "../models/station.model.js";

dotenv.config();

const stations = [
  {
    name: "Varenyam Motor Car",
    address: "56-57 JK Road, Govindpura, Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    lat: 23.259006,
    lng: 77.456769,
    totalSlots: 6,
    availableSlots: 3,
    chargerTypes: ["DC Fast", "AC 22kW"],
    chargers: [
      {
        type: "DC Fast",
        power: 50,
        unit: "kW",
        connector: "CCS2",
        chargeTime: "45 mins",
        slotsAvail: 2,
        slotsTotal: 3,
        pricePerUnit: 12,
        colorClass: "text-[#22C55E]",
        bgClass: "bg-[#22C55E]/10",
      },
      {
        type: "AC 22kW",
        power: 22,
        unit: "kW",
        connector: "Type 2",
        chargeTime: "2 hrs",
        slotsAvail: 1,
        slotsTotal: 3,
        pricePerUnit: 10,
        colorClass: "text-[#38BDF8]",
        bgClass: "bg-[#38BDF8]/10",
      },
    ],
    pricePerUnit: 12,
    rating: 4.7,
    reviews: 124,
    waitTimeMin: 4,
    distanceKm: 1.2,
    isOpen: true,
    status: "Available",
  },
  {
    name: "IOCL COCO Station",
    address: "80/2/1/2 Bhawadiya, Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    lat: 23.182404,
    lng: 77.432496,
    totalSlots: 5,
    availableSlots: 1,
    chargerTypes: ["AC 22kW"],
    chargers: [
      {
        type: "AC 22kW",
        power: 22,
        unit: "kW",
        connector: "Type 2",
        chargeTime: "2 hrs",
        slotsAvail: 1,
        slotsTotal: 3,
        pricePerUnit: 10,
        colorClass: "text-[#38BDF8]",
        bgClass: "bg-[#38BDF8]/10",
      },
    ],
    pricePerUnit: 14,
    rating: 4.4,
    reviews: 86,
    waitTimeMin: 10,
    distanceKm: 2.5,
    isOpen: true,
    status: "Limited",
  },
  {
    name: "Tata Power Charging",
    address: "Hriday Cars, Hoshangabad Road, Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    lat: 23.189112,
    lng: 77.451554,
    totalSlots: 7,
    availableSlots: 5,
    chargerTypes: ["DC Fast", "AC 22kW"],
    chargers: [
      {
        type: "DC Fast",
        power: 50,
        unit: "kW",
        connector: "CCS2",
        chargeTime: "45 mins",
        slotsAvail: 2,
        slotsTotal: 3,
        pricePerUnit: 12,
        colorClass: "text-[#22C55E]",
        bgClass: "bg-[#22C55E]/10",
      },
      {
        type: "AC 22kW",
        power: 22,
        unit: "kW",
        connector: "Type 2",
        chargeTime: "2 hrs",
        slotsAvail: 1,
        slotsTotal: 3,
        pricePerUnit: 10,
        colorClass: "text-[#38BDF8]",
        bgClass: "bg-[#38BDF8]/10",
      },
    ],
    pricePerUnit: 15,
    rating: 4.9,
    reviews: 210,
    waitTimeMin: 2,
    distanceKm: 3.1,
    isOpen: true,
    status: "Available",
  },
  {
    name: "Kotak Mahindra Charging",
    address: "MG Road, Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.722919,
    lng: 75.879361,

    totalSlots: 4,
    availableSlots: 0,
    chargerTypes: ["DC Fast"],
    chargers: [
      {
        type: "DC Fast",
        power: 50,
        unit: "kW",
        connector: "CCS2",
        chargeTime: "45 mins",
        slotsAvail: 0,
        slotsTotal: 3,
        pricePerUnit: 12,
        colorClass: "text-[#22C55E]",
        bgClass: "bg-[#22C55E]/10",
      },
    ],

    pricePerUnit: 13,
    rating: 4.3,
    reviews: 52,
    waitTimeMin: 18,
    distanceKm: 1.8,
    isOpen: true,
    status: "Busy",
  },
  {
    name: "Dosa Magic EV Point",
    address: "Moon Palace, Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.695975,
    lng: 75.84221,
    totalSlots: 5,
    availableSlots: 2,
    chargerTypes: ["AC 22kW"],
    chargers: [],

    pricePerUnit: 11,
    rating: 4.5,
    reviews: 74,
    waitTimeMin: 7,
    distanceKm: 2.2,
    isOpen: true,
    status: "Available",
  },
  {
    name: "Blue Roof Cafe Charging",

    address: "Bhawarkua Main, Indore",

    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.689781,
    lng: 75.866902,
    totalSlots: 6,
    availableSlots: 1,
    chargerTypes: ["AC 22kW"],
    chargers: [
      {
        type: "AC 22kW",
        power: 22,
        unit: "kW",
        connector: "Type 2",
        chargeTime: "2 hrs",
        slotsAvail: 1,
        slotsTotal: 3,
        pricePerUnit: 10,
        colorClass: "text-[#38BDF8]",
        bgClass: "bg-[#38BDF8]/10",
      },
    ],

    pricePerUnit: 12,
    rating: 4.2,
    reviews: 44,
    waitTimeMin: 12,
    distanceKm: 4.1,
    isOpen: true,
    status: "Limited",
  },
  {
    name: "Ather Space Indore",
    address: "Geeta Bhawan, Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.719446,
    lng: 75.884181,
    totalSlots: 8,
    availableSlots: 6,
    chargerTypes: ["DC Fast", "AC 22kW"],
    chargers: [
      {
        type: "DC Fast",
        power: 50,
        unit: "kW",
        connector: "CCS2",
        chargeTime: "45 mins",
        slotsAvail: 2,
        slotsTotal: 3,
        pricePerUnit: 12,
        colorClass: "text-[#22C55E]",
        bgClass: "bg-[#22C55E]/10",
      },
      {
        type: "AC 22kW",
        power: 22,
        unit: "kW",
        connector: "Type 2",
        chargeTime: "2 hrs",
        slotsAvail: 1,
        slotsTotal: 3,
        pricePerUnit: 10,
        colorClass: "text-[#38BDF8]",
        bgClass: "bg-[#38BDF8]/10",
      },
    ],
    pricePerUnit: 16,
    rating: 4.9,
    reviews: 301,
    waitTimeMin: 1,
    distanceKm: 1.4,
    isOpen: true,
    status: "Available",
  },

  {
    name: "Aastha Talkies Station",
    address: "Patni Pura, Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.743148,
    lng: 75.884112,
    totalSlots: 5,
    availableSlots: 1,
    chargerTypes: ["AC 22kW"],
    chargers: [
      {
        type: "AC 22kW",
        power: 22,
        unit: "kW",
        connector: "Type 2",
        chargeTime: "2 hrs",
        slotsAvail: 1,
        slotsTotal: 3,
        pricePerUnit: 10,
        colorClass: "text-[#38BDF8]",
        bgClass: "bg-[#38BDF8]/10",
      },
    ],

    pricePerUnit: 10,
    rating: 4.1,
    reviews: 36,
    waitTimeMin: 15,
    distanceKm: 3.5,
    isOpen: true,
    status: "Limited",
  },
  {
    name: "IOCL Sneh Lata Ganj",
    address: "Sneh Lata Ganj, Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.335789,
    lng: 73.173794,
    totalSlots: 6,
    availableSlots: 4,
    chargerTypes: ["DC Fast"],
    chargers: [
      {
        type: "DC Fast",
        power: 50,
        unit: "kW",
        connector: "CCS2",
        chargeTime: "45 mins",
        slotsAvail: 2,
        slotsTotal: 3,
        pricePerUnit: 12,
        colorClass: "text-[#22C55E]",
        bgClass: "bg-[#22C55E]/10",
      },
    ],

    pricePerUnit: 14,
    rating: 4.6,
    reviews: 91,
    waitTimeMin: 5,
    distanceKm: 5.3,
    isOpen: true,
    status: "Available",
  },
  {
    name: "Vrindavan Fuels",
    address: "Manikbagh, Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    lat: 22.684835,
    lng: 75.855824,
    totalSlots: 7,
    availableSlots: 5,
    chargerTypes: ["DC Fast", "AC 22kW"],
    chargers: [
      {
        type: "DC Fast",
        power: 50,
        unit: "kW",
        connector: "CCS2",
        chargeTime: "45 mins",
        slotsAvail: 2,
        slotsTotal: 3,
        pricePerUnit: 12,
        colorClass: "text-[#22C55E]",
        bgClass: "bg-[#22C55E]/10",
      },
      {
        type: "AC 22kW",
        power: 22,
        unit: "kW",
        connector: "Type 2",
        chargeTime: "2 hrs",
        slotsAvail: 1,
        slotsTotal: 3,
        pricePerUnit: 10,
        colorClass: "text-[#38BDF8]",
        bgClass: "bg-[#38BDF8]/10",
      },
    ],
    pricePerUnit: 15,
    rating: 4.8,
    reviews: 166,
    waitTimeMin: 3,
    distanceKm: 2.8,
    isOpen: true,
    status: "Available",
  },

  {
    name: "Shyam Automotive",

    address: "AB Road, Indore",

    city: "Indore",

    state: "Madhya Pradesh",

    lat: 22.65203,

    lng: 75.821321,

    totalSlots: 5,

    availableSlots: 0,

    chargerTypes: ["DC Fast"],

    chargers: [
      {
        type: "DC Fast",

        power: 50,

        unit: "kW",

        connector: "CCS2",

        chargeTime: "45 mins",

        slotsAvail: 0,

        slotsTotal: 3,

        pricePerUnit: 12,

        colorClass: "text-[#22C55E]",

        bgClass: "bg-[#22C55E]/10",
      },
    ],

    pricePerUnit: 13,

    rating: 4.0,

    reviews: 28,

    waitTimeMin: 20,

    distanceKm: 6.1,

    isOpen: true,

    status: "Busy",
  },

  {
    name: "Volttic PCS03",

    address: "Paschim Vihar, Indore",

    city: "Indore",

    state: "Madhya Pradesh",

    lat: 22.737782,

    lng: 75.861283,

    totalSlots: 6,

    availableSlots: 3,

    chargerTypes: ["AC 22kW"],

    chargers: [],

    pricePerUnit: 12,

    rating: 4.5,

    reviews: 72,

    waitTimeMin: 6,

    distanceKm: 2.9,

    isOpen: true,

    status: "Available",
  },
];

const seedStations = async () => {
  try {
    await connectDB();

    await Station.deleteMany({});

    await Station.insertMany(stations);

    console.log("Stations Seeded Successfully");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedStations();
