import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    stationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Station",
      required: true,
    },

    vehicleId: {
      type: String,
      default: null,
    },

    bookingId: {
      type: String,
      required: true,
      unique: true,
    },

    qrToken: {
      type: String,
      required: true,
      unique: true,
    },

    slotDate: {
      type: String,
      required: true,
    },

    slotTime: {
      type: String,
      required: true,
    },

    chargerType: {
      type: String,
      required: true,

      enum: [
        "CCS2",
        "CHAdeMO",
        "Type 2",
        "GB/T",

        "DC Fast",
        "DC 50kW",
        "DC 100kW",

        "AC Fast",
        "AC 11kW",
        "AC 22kW",
      ],
    },

    batteryTarget: {
      type: Number,
      default: 80,
      min: 1,
      max: 100,
    },

    estimatedDuration: {
      type: Number,
      default: 0,
    },

    estimatedCost: {
      type: Number,
      default: 0,
    },

    bookingStatus: {
      type: String,

      enum: ["pending", "confirmed", "charging", "completed", "cancelled"],

      default: "pending",
    },

    paymentStatus: {
      type: String,

      enum: ["pending", "paid", "failed", "refunded"],

      default: "pending",
    },

    paymentMethod: {
      type: String,

      enum: ["upi", "card", "wallet", "cash"],

      default: null,
    },

    notes: {
      type: String,
      trim: true,
      maxlength: 300,
    },
  },
  {
    timestamps: true,
  },
);

bookingSchema.index({
  stationId: 1,
  slotDate: 1,
  slotTime: 1,
});

bookingSchema.index({
  userId: 1,
  createdAt: -1,
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
