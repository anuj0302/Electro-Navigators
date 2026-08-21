import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import Booking from "../models/booking.model.js";
import Station from "../models/station.model.js";

export const createBooking = async (req, res) => {
  try {
    const {
      stationId,
      vehicleId,
      slotDate,
      slotTime,
      chargerType,
      batteryTarget,
      estimatedDuration,
      notes,
    } = req.body;

    if (!stationId || !slotDate || !slotTime || !chargerType) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(stationId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid station ID",
      });
    }

    const station = await Station.findById(stationId);

    if (!station) {
      return res.status(404).json({
        success: false,
        message: "Station not found",
      });
    }

    const existingBooking = await Booking.findOne({
      userId: req.user._id,
      stationId,
      slotDate,
      slotTime,
      bookingStatus: {
        $in: ["confirmed", "pending", "charging"],
      },
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: "You already booked this slot",
      });
    }

    const activeBookings = await Booking.countDocuments({
      stationId,
      slotDate,
      slotTime,
      bookingStatus: {
        $in: ["confirmed", "charging"],
      },
    });

    if (activeBookings >= station.totalSlots) {
      return res.status(400).json({
        success: false,
        message: "Selected slot is full",
      });
    }

    const estimatedCost = station.pricePerUnit * 10;

    const bookingId = `EV-${uuidv4().slice(0, 8).toUpperCase()}`;

    const qrToken = `QR-${uuidv4().slice(0, 12).toUpperCase()}`;

    const booking = await Booking.create({
      userId: req.user._id,
      stationId,
      vehicleId,
      bookingId,
      qrToken,
      slotDate,
      slotTime,
      chargerType,
      batteryTarget,
      estimatedDuration,
      estimatedCost,
      notes,
      bookingStatus: "confirmed",
      paymentStatus: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Create Booking Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create booking",
    });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.user._id,
    })
      .populate("stationId", "name address city state")
      .sort({
        createdAt: -1,
      })
      .lean();

    return res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error("Get My Bookings Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ID",
      });
    }

    const booking = await Booking.findById(id)
      .populate("userId", "name email")
      .populate("stationId")
      .lean();

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.userId._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    return res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    console.error("Get Booking Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch booking",
    });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ID",
      });
    }

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized action",
      });
    }

    if (booking.bookingStatus === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "Booking already cancelled",
      });
    }

    if (booking.bookingStatus === "completed") {
      return res.status(400).json({
        success: false,
        message: "Completed booking cannot be cancelled",
      });
    }

    booking.bookingStatus = "cancelled";

    await booking.save();

    return res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Cancel Booking Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to cancel booking",
    });
  }
};
