import { Request, Response } from 'express';

export const getTodos = async (req: Request, res: Response) => {
    try {

        res.status(200).json([
        {id:1, task: 'Finish project'}, 
        {id:2, task: 'Make dinner'}, 
        {id:3, task: 'Take the dog for a walk'}, 
        {id:4, task: 'Call mom'}]);
    }
    catch (err: Error | any) {
        res.status(404).json({ message: err.message });
    }
};

export const creatTodo = async (req: Request, res: Response) => {
    const todo = req.body;
    console.log('todo', todo);

    try {
        res.status(201).json({id: 5, task: ''});
    }
    catch (err: Error | any) {
        res.status(409).json({ message: err.message })
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    const { id:_id } = req.params;
};

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    res.status(204).json({ message: 'Todo deleted successfully'});
};