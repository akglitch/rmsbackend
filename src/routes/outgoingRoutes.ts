import express from 'express';
import {
  addRecord,
  getRecords,
  getRecordById,
  updateRecord,
  deleteRecord,
} from '../controllers/outgoingController';

const router = express.Router();

router.post('/outgoing/records', addRecord);
router.get('/outgoing/records', getRecords);
router.get('/outgoing/record/:id', getRecordById);
router.put('/outgoing/records/:id', updateRecord);
router.delete('/outgoing/records/:id', deleteRecord);


export default router;
