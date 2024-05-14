const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controllers.js');

// Define routes
router.get('/get', todoController.getAllTodos);
router.post('/create', todoController.createTodo);
router.put('/:_id', todoController.updateTodo);
router.delete('/:_id', todoController.deleteTodo);

module.exports = router;
