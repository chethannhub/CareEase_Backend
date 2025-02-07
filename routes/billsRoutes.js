import express from "express";
import {getBills} from "../controllers/billsController.js";

const router = express.Router();

// router.post("/", createBills);
router.get("/", getBills);
// router.patch("/:billId", updateBillStatus);

export default router;
