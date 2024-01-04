import express from "express";
import { getCurrentStocks } from "../controllers/stock.controller";

const router = express.Router();

router.get("/:sku(*)", getCurrentStocks);

export { router as stockRoutes };
