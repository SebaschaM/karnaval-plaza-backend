import express from "express";
import {
  insertDataClient,
  getDataClient,
} from "../controllers/dataClientController";

const router = express.Router();

router.post("/insert-data", insertDataClient);
router.get("/get-data", getDataClient);

export default router;
