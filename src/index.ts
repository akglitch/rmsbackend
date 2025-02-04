import express from 'express';
import testRoutes from './routes/testRoutes';
import incomingRoutes from './routes/incomingRoutes';
import outgoingRoutes from './routes/outgoingRoutes';
// src/index.ts
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';

connectDB()

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use('/api', incomingRoutes);
app.use('/api',outgoingRoutes)
app.use('/api',userRoutes)
app.use('/api', testRoutes);

 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


