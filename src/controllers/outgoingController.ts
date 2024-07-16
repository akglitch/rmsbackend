import { Request, Response } from "express";
import outgoingRecord from "../models/outgoingModel";

export const addRecord = async (req: Request, res: Response) => {
  try {
    const { serial_no, date_received, date_dispatched, folio_no, ...rest } = req.body;

    const existingRecord = await outgoingRecord.findOne({ serial_no });
    if (existingRecord) {
      return res.status(400).json({ message: "Duplicate serial number" });
    }

    const newRecord = new outgoingRecord({
      serial_no,
      date_received,
      date_dispatched,
      folio_no,
      ...rest,
    });

    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    console.error('Error creating record:', error);
    res.status(500).json({ message: 'Error creating record', error });
  }
};

export const getRecords = async (req: Request, res: Response) => {
  try {
    const records = await outgoingRecord.find();
    res.status(200).json(records);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getRecordById = async (req: Request, res: Response) => {
  try {
    const record = await outgoingRecord.findById(req.params.id);
    if (record) {
      res.status(200).json(record);
    } else {
      res.status(404).json({ message: 'outgoingRecord not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateRecord = async (req: Request, res: Response) => {
  try {
    const { date_received, date_dispatched, ...rest } = req.body;

    const updatedRecord = await outgoingRecord.findByIdAndUpdate(
      req.params.id,
      {
        ...rest,
        date_received: date_received ? new Date(date_received) : undefined,
        date_dispatched: date_dispatched ? new Date(date_dispatched) : undefined,
      },
      { new: true }
    );

    if (updatedRecord) {
      res.status(200).json(updatedRecord);
    } else {
      res.status(404).json({ message: 'outgoingRecord not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRecord = async (req: Request, res: Response) => {
  try {
    const deletedRecord = await outgoingRecord.findByIdAndDelete(req.params.id);
    if (deletedRecord) {
      res.status(204).json({ message: 'outgoingRecord deleted' });
    } else {
      res.status(404).json({ message: 'outgoingRecord not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
