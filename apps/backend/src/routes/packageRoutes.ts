import { Router } from "express";
import { createPackage } from "../controllers/packageController";
import { adminAuth } from "../middlewares/adminAuth";

const router = Router();

// Create a package (admin only)
router.post("/", adminAuth, createPackage);

export default router; 