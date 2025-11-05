import { Request, Response, NextFunction } from 'express';
import {UserInterface} from "../models/user"

interface AuthRequest extends Request {
  user?: UserInterface;
}

export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }

  next();
};
