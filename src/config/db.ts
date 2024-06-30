// src/config/db.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('record_management', 'root', 'kaytee123', {
  host: 'localhost',
  dialect: 'mysql',
  
});

export default sequelize;

