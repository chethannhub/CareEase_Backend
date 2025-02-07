import express from "express";
import { createBills, getBills,updateBillStatus} from "../controllers/bedsController.js";

const router = express.Router();

router.post("/", createBills);
router.get("/", getBills);
router.patch("/:billId", updateBillStatus);

export default router;
