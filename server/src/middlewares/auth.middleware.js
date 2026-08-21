import jwt from "jsonwebtoken";
import User from "../models/authUser.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    let token =
      req.headers["authorization"]?.replace("Bearer ", "") ||
      req.cookies?.token ||
      null;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided. Unauthorized access.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded || !decoded.id) {
      return res.status(401).json({
        success: false,
        message: "Invalid token. Unauthorized.",
      });
    }

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found. Unauthorized.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired. Please login again.",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
