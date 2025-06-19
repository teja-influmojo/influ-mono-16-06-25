import { Request, Response, NextFunction } from "express";

// This middleware assumes req.user is set and has a 'role' property
export function adminAuth(req: Request, res: Response, next: NextFunction) {
  // In a real app, you would extract user info from a JWT or session
  // For demo, assume req.user is set by previous auth middleware
  const user = req.user as { role?: string } | undefined;
  if (!user || user.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
} 