import { Request, Response } from "express";
import { prisma } from "../app";

// Create a package (admin only)
export const createPackage = async (req: Request, res: Response) => {
  const { collaboration_id, admin_id, type, title, description, price, deliverables } = req.body;
  try {
    const pkg = await prisma.package.create({
      data: {
        collaboration_id,
        admin_id,
        type,
        title,
        description,
        price,
        deliverables,
      },
    });
    res.status(201).json(pkg);
  } catch (error) {
    res.status(500).json({ error: "Failed to create package" });
  }
}; 