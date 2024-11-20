import express from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', authMiddleware, (req, res) => {
    res.json({ 
        message: 'You have access to the profile route', 
        user: (req as any).user
    });
});

export default router;
