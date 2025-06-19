import { Router } from "express";
import { createContentSubmission } from "../controllers/contentSubmissionController";
import { adminAuth } from "../middlewares/adminAuth";

const router = Router();

// Create a content submission (admin only)
router.post("/", adminAuth, createContentSubmission);

export default router; 