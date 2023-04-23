interface Todo {
    task: string;
}

import {Schema, model} from 'mongoose';

const todoShema = new Schema<Todo>({
    task: { type: String, required: true },
  });

const Todo = model<Todo>('Todo', todoShema);