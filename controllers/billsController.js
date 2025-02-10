import { Bills } from "../models/bills.js";

export const createBills = async (req, res) => {
    try {
        const bills = await Bills.create(req.body);
        res.status(201).json(beds);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getBills = async (req, res) => {
    try {
        const bills = await Bills.find()
            .populate("patient", "name problem age");
            
        res.status(200).json(bills);

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};