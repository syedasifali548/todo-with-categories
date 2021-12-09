import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  scheduleddate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  password: {
    type: String,
  },
});

export const Todo = mongoose.model("Todo", todoSchema);
