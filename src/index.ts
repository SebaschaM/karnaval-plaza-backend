import express from "express";
import dataClientRoute from "./routes/dataClientRoute";
import connection from "./db/connection";
import cors from "cors";

const app = express();
process.loadEnvFile();
connection;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api", dataClientRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} 🚀`);
});
