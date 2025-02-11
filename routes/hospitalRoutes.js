import express from 'express';
import { createHospital, getHospital, updateHospital, getHospitalById } from '../controllers/hospitalController.js';

const router = express.Router();

router.post('/', createHospital);
router.get('/', getHospital);
router.put('/', updateHospital);
router.get('/:userId', getHospitalById);

export default router;