// routes/beds.js
import express from "express";
import { createBeds, getBeds, updateBed } from "../controllers/bedsController.js";

const router = express.Router();

router.post("/", createBeds);
router.get("/", getBeds);
router.patch("/:bedId", updateBed);

export default router;
