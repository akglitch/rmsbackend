// src/routes/testRoutes.ts
import { Router } from 'express';

const router = Router();

router.post('/test', (req, res) => {
  res.status(200).json({ message: 'Test route working', data: req.body });
});

export default router;
