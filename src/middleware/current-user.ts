import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
  setings: Object;
  rating: number;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
      session: any;
    }
  }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    console.log('erro user JWT ', err, ' jwt ', req.session.jwt);
  }
  next();
};
