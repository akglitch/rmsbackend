// src/models/Record.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Record extends Model {}

Record.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_received: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  log_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  serial_no: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  from_whom_received: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_letter: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  institutional_ref_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  received_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mode_of_received: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type_of_letter: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  file_directory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Record',
  timestamps: false, // Disable timestamps
});

export default Record;
