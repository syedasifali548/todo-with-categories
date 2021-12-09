import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  title: {
    type: String,

    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Category = mongoose.model("Category", categorySchema);
