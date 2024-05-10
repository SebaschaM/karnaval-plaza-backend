import express from "express";
import dataClientRoute from "./routes/dataClientRoute";
import connection from "./db/connection";
import cors from "cors";

const app = express();
//process.loadEnvFile();
connection;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/client", dataClientRoute);

app.listen(3000, () => {
  console.log(`Server is running on port ${3000} 🚀`);
});
