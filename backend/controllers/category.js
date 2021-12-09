import { Category } from "../models/category.js";

export const createCategory = async (req, res) => {
  const { title } = req.body;

  const category = new Category({ title });
  try {
    await category.save();
    res.status(201).json(category);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).send();
  }
};
