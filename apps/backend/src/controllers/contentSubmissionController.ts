import { Request, Response } from "express";
import { prisma } from "../app";

// Create a content submission (admin only)
export const createContentSubmission = async (req: Request, res: Response) => {
  const { collaboration_id, admin_id, content_type, content_url, caption, hashtags, mentions, platform, submission_notes, status, submitted_at, reviewed_at, published_at, post_url } = req.body;
  try {
    const submission = await prisma.contentSubmission.create({
      data: {
        collaboration_id,
        admin_id,
        content_type,
        content_url,
        caption,
        hashtags,
        mentions,
        platform,
        submission_notes,
        status,
        submitted_at,
        reviewed_at,
        published_at,
        post_url,
      },
    });
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ error: "Failed to create content submission" });
  }
}; 