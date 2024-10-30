import { Schema } from "mongoose";

export default new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      maxlength: [100, "First name can not exceed 100 characters"],
      minlength: [1, "First name can not be less than 1 character"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      maxlength: [100, "Last name can not exceed 100 characters"],
      minlength: [1, "Last name can not be less than 1 character"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age can not be less than 1"],
      max: [120, "Age can not exceed 120"],
    },
    hobbies: {
      type: [String],
      default: [],
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
  }
);
