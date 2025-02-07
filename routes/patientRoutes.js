import express from "express";
import { createPatient, getPatients, getPatients_email_password, getPatientById  } from "../controllers/patientController.js";

const router = express.Router();

router.post("/", createPatient);
router.get("/", getPatients);
router.get("/getPasswordEmail", getPatients_email_password);
router.get("/:userId", getPatientById); 

export default router;
