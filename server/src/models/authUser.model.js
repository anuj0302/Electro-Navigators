import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
      default: "Anonymous User",
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          if (!value) return true;
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format",
      },
    },

    phonenumber: {
      type: String,
      validate: {
        validator: function (value) {
          if (!value) return true;
          return /^[0-9]{10}$/.test(value);
        },
        message: "Phone number must be 10 digits",
      },
    },

    location: {
      type: String,
      trim: true,
      default: "",
    },

    joinedDate: {
      type: Date,
      default: Date.now,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    loginMethod: {
      type: String,
      enum: ["default", "phone"],
      required: true,
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

userSchema.index({ email: 1 }, { unique: true, sparse: true });
userSchema.index({ phonenumber: 1 }, { unique: true, sparse: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
