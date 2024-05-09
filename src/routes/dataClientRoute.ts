import express from "express";
import { insertDataClient } from "../controllers/dataClientController";

const router = express.Router();

router.post("/insert-data", insertDataClient);

export default router;
