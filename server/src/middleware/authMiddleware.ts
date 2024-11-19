import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorisation')?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: 'Authorisation denied' });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
        (req as any).user = decoded;
        next();
        return; 
    } catch (error) {
        res.status(401).json({ message: 'Invalid Token' });
        return; 
    }
};

export default authMiddleware;
