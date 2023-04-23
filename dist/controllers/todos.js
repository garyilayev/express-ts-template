"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.creatTodo = exports.getTodos = void 0;
// import Confession from '../models/confession.js';
// import mongoose from 'mongoose';
const getTodos = async (req, res) => {
    try {
        res.status(200).json([
            { id: 1, task: 'Finish project' },
            { id: 2, task: 'Make dinner' },
            { id: 3, task: 'Take the dog for a walk' },
            { id: 4, task: 'Call mom' }
        ]);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
};
exports.getTodos = getTodos;
const creatTodo = async (req, res) => {
    const confession = req.body;
    console.log('confession', confession);
    try {
        res.status(201).json({ id: 5, task: '' });
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
};
exports.creatTodo = creatTodo;
const updateTodo = async (req, res) => {
    const { id: _id } = req.params;
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    res.status(204).json({ message: 'Todo deleted successfully' });
};
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todos.js.map