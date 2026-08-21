import { getStationStatus } from "../utils/stationStatus.js";

const stations = [
  {
    id: "1",
    name: "Varenyam Motor Car",
    address: "56-57 JK Road, Govindpura, Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",

    lat: 23.259006,
    lng: 77.456769,

    totalSlots: 6,
    availableSlots: 3,

    chargerTypes: ["DC Fast", "AC 22kW"],

    chargersData: [
      {
        id: "1-dc-1",

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
        id: "1-ac-1",

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

    pricePerKWh: 12,

    rating: 4.7,
    reviews: 124,

    waitTime: "~4 min",
    distance: "1.2 km",
  },

  {
    id: "2",
    name: "IOCL COCO Station",
    address: "80/2/1/2 Bhawadiya, Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",

    lat: 23.182404,
    lng: 77.432496,

    totalSlots: 5,
    availableSlots: 1,

    chargerTypes: ["AC 22kW"],

    chargersData: [
      {
        id: "1-ac-1",

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

    pricePerKWh: 14,

    rating: 4.4,
    reviews: 86,

    waitTime: "~10 min",
    distance: "2.5 km",
  },

  {
    id: "3",
    name: "Tata Power Charging",
    address: "Hriday Cars, Hoshangabad Road, Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",

    lat: 23.189112,
    lng: 77.451554,

    totalSlots: 7,
    availableSlots: 5,

    chargerTypes: ["DC Fast", "AC 22kW"],

    chargersData: [
      {
        id: "1-dc-1",

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
        id: "1-ac-1",

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

    pricePerKWh: 15,

    rating: 4.9,
    reviews: 210,

    waitTime: "~2 min",
    distance: "3.1 km",
  },

  {
    id: "4",
    name: "Kotak Mahindra Charging",
    address: "MG Road, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.722919,
    lng: 75.879361,

    totalSlots: 4,
    availableSlots: 0,

    chargerTypes: ["DC Fast"],

    chargersData: [
      {
        id: "1-dc-1",

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

    pricePerKWh: 13,

    rating: 4.3,
    reviews: 52,

    waitTime: "~18 min",
    distance: "1.8 km",
  },

  {
    id: "5",
    name: "Dosa Magic EV Point",
    address: "Moon Palace, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.695975,
    lng: 75.84221,

    totalSlots: 5,
    availableSlots: 2,

    chargerTypes: ["AC 22kW"],

    pricePerKWh: 11,

    rating: 4.5,
    reviews: 74,

    waitTime: "~7 min",
    distance: "2.2 km",
  },

  {
    id: "6",
    name: "Blue Roof Cafe Charging",
    address: "Bhawarkua Main, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.689781,
    lng: 75.866902,

    totalSlots: 6,
    availableSlots: 1,

    chargerTypes: ["AC 22kW"],

    chargersData: [
      {
        id: "1-ac-1",

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

    pricePerKWh: 12,

    rating: 4.2,
    reviews: 44,

    waitTime: "~12 min",
    distance: "4.1 km",
  },

  {
    id: "7",
    name: "Ather Space Indore",
    address: "Geeta Bhawan, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.719446,
    lng: 75.884181,

    totalSlots: 8,
    availableSlots: 6,

    chargerTypes: ["DC Fast", "AC 22kW"],

    chargersData: [
      {
        id: "1-dc-1",

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
        id: "1-ac-1",

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

    pricePerKWh: 16,

    rating: 4.9,
    reviews: 301,

    waitTime: "~1 min",
    distance: "1.4 km",
  },

  {
    id: "8",
    name: "Aastha Talkies Station",
    address: "Patni Pura, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.743148,
    lng: 75.884112,

    totalSlots: 5,
    availableSlots: 1,

    chargerTypes: ["AC 22kW"],

    chargersData: [
      {
        id: "1-ac-1",

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

    pricePerKWh: 10,

    rating: 4.1,
    reviews: 36,

    waitTime: "~15 min",
    distance: "3.5 km",
  },

  {
    id: "9",
    name: "IOCL Sneh Lata Ganj",
    address: "Sneh Lata Ganj, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.335789,
    lng: 73.173794,

    totalSlots: 6,
    availableSlots: 4,

    chargerTypes: ["DC Fast"],

    chargersData: [
      {
        id: "1-dc-1",

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

    pricePerKWh: 14,

    rating: 4.6,
    reviews: 91,

    waitTime: "~5 min",
    distance: "5.3 km",
  },

  {
    id: "10",
    name: "Vrindavan Fuels",
    address: "Manikbagh, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.684835,
    lng: 75.855824,

    totalSlots: 7,
    availableSlots: 5,

    chargerTypes: ["DC Fast", "AC 22kW"],

    chargersData: [
      {
        id: "1-dc-1",

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
        id: "1-ac-1",

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

    pricePerKWh: 15,

    rating: 4.8,
    reviews: 166,

    waitTime: "~3 min",
    distance: "2.8 km",
  },

  {
    id: "11",
    name: "Shyam Automotive",
    address: "AB Road, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.65203,
    lng: 75.821321,

    totalSlots: 5,
    availableSlots: 0,

    chargerTypes: ["DC Fast"],
    chargersData: [
      {
        id: "1-dc-1",

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

    pricePerKWh: 13,

    rating: 4.0,
    reviews: 28,

    waitTime: "~20 min",
    distance: "6.1 km",
  },

  {
    id: "12",
    name: "Volttic PCS03",
    address: "Paschim Vihar, Indore",
    city: "Indore",
    state: "Madhya Pradesh",

    lat: 22.737782,
    lng: 75.861283,

    totalSlots: 6,
    availableSlots: 3,

    chargerTypes: ["AC 22kW"],

    pricePerKWh: 12,

    rating: 4.5,
    reviews: 72,

    waitTime: "~6 min",
    distance: "2.9 km",
  },
];

const stationsWithStatus = stations.map((station) => ({
  ...station,
  status: getStationStatus(station.availableSlots, station.totalSlots),
}));

export default stationsWithStatus;
