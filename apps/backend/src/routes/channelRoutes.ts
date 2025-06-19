import { Router } from "express";
import { prisma } from "../app";

const router = Router();

// Create a new collaboration channel (admin must be assigned)
router.post("/", async (req, res) => {
  const { collaboration_id, admin_id } = req.body;
  try {
    const channel = await prisma.collaborationChannel.create({
      data: {
        collaboration_id,
        admin_id,
      },
    });
    res.status(201).json(channel);
  } catch (error) {
    res.status(500).json({ error: "Failed to create channel" });
  }
});

// Get all messages in a channel (admin, brand, influencer can view)
router.get("/:channelId/messages", async (req, res) => {
  const { channelId } = req.params;
  try {
    const messages = await prisma.message.findMany({
      where: { channel_id: Number(channelId) },
      include: { sender: true },
      orderBy: { created_at: "asc" },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Post a message to a channel (admin, brand, influencer)
router.post("/:channelId/messages", async (req, res) => {
  const { channelId } = req.params;
  const { sender_id, message_text, message_type, file_url, file_name } = req.body;
  try {
    const message = await prisma.message.create({
      data: {
        channel_id: Number(channelId),
        sender_id,
        message_text,
        message_type,
        file_url,
        file_name,
      },
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router; 