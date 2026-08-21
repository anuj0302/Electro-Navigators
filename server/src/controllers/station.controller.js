import mongoose from "mongoose";

import Station from "../models/station.model.js";

export const getAllStations = async (req, res) => {
  try {
    const { city, state } = req.query;

    const query = {};

    if (city) {
      query.city = new RegExp(city, "i");
    }

    if (state) {
      query.state = new RegExp(state, "i");
    }

    const stations = await Station.find(query).lean();

    return res.status(200).json({
      success: true,
      count: stations.length,
      data: stations,
    });
  } catch (error) {
    console.error("Get Stations Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch stations",
    });
  }
};

export const getStationById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid station ID",
      });
    }

    const station = await Station.findById(id).lean();

    if (!station) {
      return res.status(404).json({
        success: false,
        message: "Station not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: station,
    });
  } catch (error) {
    console.error("Get Station Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch station",
    });
  }
};
