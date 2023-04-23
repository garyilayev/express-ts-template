"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
const port = 8000;
app.use('/todos', todos_1.default);
app.use('/', (req, res) => {
    res.send('Edit index.ts to get started!');
});
app.get('/test', (req, res) => {
    res.send("Got Test!");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`Endpoint on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map