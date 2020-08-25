import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const auth: RequestHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (token)
      req.body.userData = jwt.verify(token, process.env.SECRET as string);
    else res.status(401).json({ message: 'Unauthorized' });
    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth failed!' });
  }
};
