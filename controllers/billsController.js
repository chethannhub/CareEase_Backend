import { Beds } from "../models/beds.js";

export const getBeds = async (req, res) => {
    try {
        const beds = await Beds.find()
            .populate("patient", "name problem age");
            
        res.status(200).json(beds);

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};