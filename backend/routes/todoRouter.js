import express from "express";

import {
  addTodo,
  deleteAllTodosWithParticularCategory,
  getAllTodosWithParticularCategory,
  deleteSingleTodo,
  editSingleTodo,
  updateTodo,
} from "./../controllers/todo.js";
export const todoRouter = express.Router();

todoRouter.route("/todo/:id").get(getAllTodosWithParticularCategory);
todoRouter.route("/todo/:id").post(addTodo);
todoRouter.route("/todo/:id").delete(deleteAllTodosWithParticularCategory);
todoRouter.route("/removetodo/:todoId").delete(deleteSingleTodo);
todoRouter.route("/edittodo/:todoId").post(editSingleTodo);
todoRouter.route("/updatetodo/:todoId").put(updateTodo);
