// routes/userRoutes.ts
import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import { Request, Response } from 'express';
const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', (req:Request, res:Response) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
  });

export default router;
