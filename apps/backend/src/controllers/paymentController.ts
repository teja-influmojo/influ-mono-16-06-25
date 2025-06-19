import { Request, Response } from "express";
import { prisma } from "../app";

// Create a payment (admin only)
export const createPayment = async (req: Request, res: Response) => {
  const { collaboration_id, payer_id, payee_id, admin_id, amount, currency, platform_fee, net_amount, payment_method, transaction_id, status } = req.body;
  try {
    const payment = await prisma.payment.create({
      data: {
        collaboration_id,
        payer_id,
        payee_id,
        admin_id,
        amount,
        currency,
        platform_fee,
        net_amount,
        payment_method,
        transaction_id,
        status,
      },
    });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create payment" });
  }
}; 