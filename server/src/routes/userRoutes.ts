import express from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', 
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Email must be valid'),
        body('password')
            .isLength({ min: 10 })
            .withMessage('Password must be at least 10 characters'),
    ],
    registerUser);

router.post('/login',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
     loginUser);

router.get('/profile', authMiddleware, (req, res) => {
    res.json({ 
        message: 'You have access to the profile route', 
        user: (req as any).user
    });
});

export default router;
