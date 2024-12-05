import express from "express";
import { createAppointment, getAppointments, updateAppointmentStatus } from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/", createAppointment);
router.get("/", getAppointments);
router.patch("/:appointmentId", updateAppointmentStatus);

export default router;
