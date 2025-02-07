import { Beds } from "../models/beds.js";

export const createBeds = async (req, res) => {
    try {
        const beds = await Beds.create(req.body);
        res.status(201).json(beds);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getBeds = async (req, res) => {
    try {
        const beds = await Beds.find()
            .populate("patient", "name problem age");
            
        res.status(200).json(beds);

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBedStatus = async (req, res) => {
    const { bedId } = req.params;
    const { status } = req.body;

    try {
        const bed = await Beds.findByIdAndUpdate(
            bedId,
            { status, lastupdated: Date.now() },
            { new: true }
        );

        if (!bed) {
            return res.status(404).json({ message: "Bed not found" });
        }

        res.status(200).json(bed);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
