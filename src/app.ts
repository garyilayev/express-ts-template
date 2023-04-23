import express, { NextFunction, Request, Response} from 'express';
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import { json, urlencoded } from "body-parser";

import todosRouter from "./routes/todos";

export const app = express();

// Middleware setup
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));

// Route setup
app.use("/api/todos", todosRouter);

// Default error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;