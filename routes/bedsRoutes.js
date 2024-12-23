import express from "express";
import { createBeds, getBeds,updateBedStatus} from "../controllers/bedsController.js";

const router = express.Router();

router.post("/", createBeds);
router.get("/", getBeds);
router.patch("/:bedId", updateBedStatus);

export default router;
