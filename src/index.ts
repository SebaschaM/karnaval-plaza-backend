import express from "express";
import dataClientRoute from "./routes/dataClientRoute";
import connection from "./db/connection";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
connection;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/client", dataClientRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${3000} 🚀`);
});
