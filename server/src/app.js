import express from "express";

import cors from "cors";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://electro-navigator.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },

    credentials: true,

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);

  next();
});

import authRoutes from "./routes/authUser.route.js";

import stationRoutes from "./routes/station.route.js";

import bookingRoutes from "./routes/booking.route.js";

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/stations", stationRoutes);

app.use("/api/v1/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,

    message: "Electro Navigators API Running",
  });
});

export default app;
