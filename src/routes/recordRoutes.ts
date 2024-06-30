import express from 'express';
import {
  addRecord,
  getRecords,
  getRecordByid,
  updateRecord,
  deleteRecord,
  generateReport
} from '../controllers/recordController';

const router = express.Router();

router.post('/records', addRecord);
router.get('/records', getRecords);
router.get('/record/:id', getRecords);
router.put('/records/:id', updateRecord);
router.delete('/records/:id', deleteRecord);
router.get('/records/report', generateReport);

export default router;
