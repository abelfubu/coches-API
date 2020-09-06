import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const auth: RequestHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    console.log(jwt.verify(token, process.env.SECRET as string));
    req.body.userData = jwt.verify(token, process.env.SECRET as string);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Auth failed!' });
  }
};
