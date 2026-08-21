import User from "../models/authUser.model.js";

import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const signToken = (userId) => {
  return jsonwebtoken.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

export const emailSignup = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    if (!fullname || !email || !password || !confirmPassword)
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });

    if (password.length < 6)
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      loginMethod: "default",
    });

    const token = signToken(newUser._id);

    newUser.password = undefined;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: err.message,
    });
  }
};

export const emailLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email)
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });

    if (!password)
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(400).json({
        success: false,
        message: "User not found. Please signup first.",
      });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });

    const token = signToken(user._id);

    user.lastLoginAt = new Date();
    await user.save();

    user.password = undefined;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error during login",
      error: error.message,
    });
  }
};

export const phoneSignup = async (req, res) => {
  try {
    const { fullname, phonenumber, password, confirmPassword } = req.body;

    if (!fullname || !phonenumber || !password || !confirmPassword)
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    if (password !== confirmPassword)
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });

    if (password.length < 6)
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });

    const existingUser = await User.findOne({ phonenumber });
    if (existingUser)
      return res
        .status(400)
        .json({ success: false, message: "Phone number already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      phonenumber,
      password: hashedPassword,
      loginMethod: "phone",
    });

    const token = signToken(newUser._id);

    newUser.password = undefined;

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: err.message,
    });
  }
};

export const phoneLogin = async (req, res) => {
  try {
    const { phonenumber, password } = req.body;

    if (!phonenumber)
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });

    if (!password)
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });

    const user = await User.findOne({ phonenumber }).select("+password");
    if (!user)
      return res.status(400).json({
        success: false,
        message: "User not found. Please signup first.",
      });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });

    const token = signToken(user._id);

    user.lastLoginAt = new Date();
    await user.save();

    user.password = undefined;

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error during login",
      error: err.message,
    });
  }
};
