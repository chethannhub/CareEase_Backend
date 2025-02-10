import express from 'express';
import { createAdmin, getAdminProfile, updateAdminProfile, getAdmin_email_password, getAdminById } from '../controllers/adminController.js';

const router = express.Router();

router.post('/', createAdmin);
router.get('/admin-profile', getAdminProfile);
router.put('/admin-profile', updateAdminProfile);
router.get('/getPasswordEmail', getAdmin_email_password);
router.get('/:userId', getAdminById);

export default router;