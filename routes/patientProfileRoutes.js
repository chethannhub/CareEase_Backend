import express from "express";
import { getPatients, getPatientById, createPatient, updatePatient, deletePatient } from "../controllers/patientProfileController.js";

const router = express.Router();

router.get("/", getPatients);
router.get("/:id", getPatientById);
router.post("/", createPatient);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

export default router;
