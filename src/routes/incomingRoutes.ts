import express from 'express';
import {
  addRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
  generateReport
} from '../controllers/incomingController';

const router = express.Router();

router.post('/incoming/records', addRecord);
router.get('/incoming/records', getRecords);
router.get('/incoming/record/:id', getRecordById);
router.put('/incoming/records/:id', updateRecord);
router.delete('/incoming/records/:id', deleteRecord);
router.get('/incoming/records/report', generateReport);

export default router;
