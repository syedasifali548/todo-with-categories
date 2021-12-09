import { Todo } from "../models/todoModel.js";
import { Category } from "../models/category.js";
export const getAllTodosWithParticularCategory = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  Todo.find({ category: id })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.json(err);
    });
};

export const addTodo = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { text, date } = req.body;
  try {
    const todo = new Todo({
      text,
      completed: false,
      category: id,
      scheduleddate: date,
    });
    await todo.save();
    res.status(201).send(todo);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const deleteAllTodosWithParticularCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.deleteMany({ category: id });
    res
      .status(200)
      .json({ msg: "All todos with this category have been deleted" });
    const category = await Category.findByIdAndDelete(id);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const deleteSingleTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    await Todo.findByIdAndDelete({ _id: todoId });
    res.status(200).json({ msg: "Todo has been deleted" });
  } catch (e) {
    res.status(400).send(e);
  }
};

export const editSingleTodo = async (req, res) => {
  const { todoId } = req.params;
  const { text } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate({ _id: todoId });
    todo.text = text;
    await todo.save();

    res.status(200).json({ msg: "Todo has been updated", todo });
  } catch (e) {
    res.status(400).send(e);
  }
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  console.log(req.params);
  console.log("I am Fined");
  try {
    const todo = await Todo.findById({ _id: todoId });

    todo.completed = !todo.completed;
    await todo.save();
    res.status(200).json({ msg: "Todo has been updated", todo });
  } catch (e) {
    res.status(400).send(e);
  }
};
