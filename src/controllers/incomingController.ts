import { Request, Response } from 'express';
import incomingRecord from '../models/incomingModel';

export const addRecord = async (req: Request, res: Response) => {
  console.log('Received POST request:', req.body); // Log the request body

  try {
    const { serial_no, date_received, date_of_letter, ...rest } = req.body;

    // Check if serial_no is unique
    const existingRecord = await incomingRecord.findOne({ serial_no });
    if (existingRecord) {
      return res.status(400).json({ message: 'Duplicate serial number' });
    }

    // Convert date strings to Date objects
    const newRecord = new incomingRecord({
      serial_no,
      date_received: new Date(date_received),
      date_of_letter: new Date(date_of_letter),
      ...rest,
    });

    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error creating record:', error); // Log the error
    res.status(500).json({ message: 'Error creating record', error });
  }
};

export const getRecords = async (req: Request, res: Response) => {
  try {
    const records = await incomingRecord.find();
    res.status(200).json(records);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRecordById = async (req: Request, res: Response) => {
  try {
    const record = await incomingRecord.findById(req.params.id);
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ message: 'incomingRecord not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRecord = async (req: Request, res: Response) => {
  try {
    const { date_received, date_of_letter, ...rest } = req.body;

    const updatedRecord = await incomingRecord.findByIdAndUpdate(
      req.params.id,
      {
        ...rest,
        date_received: date_received ? new Date(date_received) : undefined,
        date_of_letter: date_of_letter ? new Date(date_of_letter) : undefined,
      },
      { new: true }
    );

    if (updatedRecord) {
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'incomingRecord not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  try {
    const deletedRecord = await incomingRecord.findByIdAndDelete(req.params.id);
    if (deletedRecord) {
      res.status(204).json({ message: 'incomingRecord deleted' });
    } else {
      res.status(404).json({ message: 'incomingRecord not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const generateReport = async (req: Request, res: Response) => {
  try {
    // Implement report generation logic
    res.status(200).json({ url: 'http://example.com/report.pdf' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
