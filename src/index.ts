import express from 'express';
import sequelize from './config/db';
import testRoutes from './routes/testRoutes';
import recordRoutes from './routes/recordRoutes';
// src/index.ts
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', recordRoutes);
app.use('/api', testRoutes);

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Database connected and synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
