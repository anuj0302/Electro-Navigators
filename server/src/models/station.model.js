import mongoose from "mongoose";

const chargerSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },

    power: {
      type: Number,
      required: true,
    },

    unit: {
      type: String,
      default: "kW",
    },

    connector: {
      type: String,
      required: true,
    },

    chargeTime: {
      type: String,
      default: "",
    },

    slotsAvail: {
      type: Number,
      default: 0,
    },

    slotsTotal: {
      type: Number,
      default: 0,
    },

    pricePerUnit: {
      type: Number,
      default: 0,
    },

    colorClass: {
      type: String,
      default: "",
    },

    bgClass: {
      type: String,
      default: "",
    },
  },
  {
    _id: false,
  },
);

const stationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    lat: {
      type: Number,
      required: true,
    },

    lng: {
      type: Number,
      required: true,
    },

    distanceKm: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    isOpen: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      default: "Available",
    },

    waitTimeMin: {
      type: Number,
      default: 0,
    },

    availableSlots: {
      type: Number,
      default: 0,
    },

    totalSlots: {
      type: Number,
      default: 0,
    },

    pricePerUnit: {
      type: Number,
      default: 0,
    },

    chargerTypes: {
      type: [String],
      default: [],
    },

    chargers: {
      type: [chargerSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

stationSchema.index({
  city: 1,
  state: 1,
});

const Station = mongoose.model("Station", stationSchema);

export default Station;
