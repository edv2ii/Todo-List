// todo.controllers.js

const Todo = require("../models/todo.models.js");

// Controller to get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

// Controller to create a new todo
exports.createTodo = async (req, res) => {
  const { text, completed, color } = req.body;
  const newTodo = new Todo({ text, completed, color });

  try {
    const savedTodo = await newTodo.save();
    res.send(newTodo)
    res.status(201).json(savedTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
};

// Controller to update a todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  console.log(text)
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Failed to update todo" });
  }
};

// Controller to delete a todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
