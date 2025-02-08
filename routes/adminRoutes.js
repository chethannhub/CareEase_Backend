import express from 'express';
import { getAdminProfile, updateAdminProfile } from '../controllers/adminController.js';

const router = express.Router();

router.get('/admin-profile', getAdminProfile);
router.put('/admin-profile', updateAdminProfile);

export default router;