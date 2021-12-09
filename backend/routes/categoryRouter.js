import express from "express";

import { createCategory, getCategories } from "./../controllers/category.js";
export const catRouter = express.Router();

catRouter.route("/category").get(getCategories);
catRouter.route("/category").post(createCategory);
