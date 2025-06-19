import { Router } from "express";
import { createPayment } from "../controllers/paymentController";
import { adminAuth } from "../middlewares/adminAuth";

const router = Router();

// Create a payment (admin only)
router.post("/", adminAuth, createPayment);

export default router; 