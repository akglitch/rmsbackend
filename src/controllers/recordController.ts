import { Request, Response } from 'express';
import Record from '../models/record';

export const addRecord = async (req: Request, res: Response) => {
  console.log('Received POST request:', req.body); // Add this line
  try {
    const newRecord = await Record.create(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error creating record:', error); // Add this line
    res.status(500).json({ message: 'Error creating record', error });
  }
};

export const getRecords = async (req: Request, res: Response) => {
  try {
    const records = await Record.findAll();
    res.status(200).json(records);
  } catch (error: any) { // Explicitly type 'error' as 'any' or 'Error'
    res.status(400).json({ error: error.message });
  }
};

export const getRecordByid = async (req: Request, res: Response) => {
  try {
    const record = await Record.findOne({ where: {id: req.params.id } });
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error: any) { // Explicitly type 'error' as 'any' or 'Error'
    res.status(400).json({ error: error.message });
  }
};

export const updateRecord = async (req: Request, res: Response) => {
  try {
    const [updated] = await Record.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedRecord = await Record.findByPk(req.params.id);
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  try {
    const deleted = await Record.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).json({ message: 'Record deleted' });
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const generateReport = async (req: Request, res: Response) => {
  try {
    // Implement report generation logic
    res.status(200).json({ url: 'http://example.com/report.pdf' });
  } catch (error: any) { // Explicitly type 'error' as 'any' or 'Error'
    res.status(400).json({ error: error.message });
  }
};
