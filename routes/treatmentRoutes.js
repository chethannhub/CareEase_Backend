import express from "express";
import {
  getTreatments,
  addTreatment,
  deleteTreatment,
  searchTreatments
} from "../controllers/treatmentController.js";

const router = express.Router();

// GET all treatments
router.get("/", getTreatments);

// POST a new treatment
router.post("/", addTreatment);

// DELETE a treatment by ID
router.delete("/:id", deleteTreatment);

// GET treatments by search query
router.get("/search", searchTreatments);

export default router;
