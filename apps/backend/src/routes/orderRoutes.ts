import { Router } from "express";
import { prisma } from "../app";

const router = Router();

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: { user: true }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Get order by id
router.get("/:id", async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: req.params.id },
      include: { user: true }
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
});

// Create order
router.post("/", async (req, res) => {
  try {
    const { userId, totalAmount, status } = req.body;
    const order = await prisma.order.create({
      data: {
        userId,
        totalAmount,
        status
      },
      include: { user: true }
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Update order
router.put("/:id", async (req, res) => {
  try {
    const { status, totalAmount } = req.body;
    const order = await prisma.order.update({
      where: { id: req.params.id },
      data: {
        status,
        totalAmount
      },
      include: { user: true }
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to update order" });
  }
});

// Delete order
router.delete("/:id", async (req, res) => {
  try {
    await prisma.order.delete({
      where: { id: req.params.id }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
});

export default router; 