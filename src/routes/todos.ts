import express from 'express';
import { getTodos, creatTodo, updateTodo, deleteTodo } from '../controllers/todos';

const router = express.Router();

router.get('/', getTodos);
router.post('/', creatTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;