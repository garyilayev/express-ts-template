import app from "./app";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
// Change MONGODB_URI in the .env file
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/my-app";

mongoose.connect(mongoUri).then(() => {
  console.log("Connected to database.");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
})
.catch((error) => {
  console.log(`Error connecting to database: ${error.message}`);
  process.exit(1);
});
