import { Hospital } from '../models/hospital.js';

export const createHospital = async (req, res) => {
    try {
        let { email, name } = req.body;

        if (!name && email) {
            name = email.split("@")[0]; 
        }
        const hospital = await Hospital.create({ ...req.body, name });

        res.status(201).json(hospital);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getHospital = async (req, res) => {
    try {
        const hospital = await Hospital.findOne()
        if (!hospital) return res.status(404).json({ message: "Hospital not found" });
        res.json(hospital);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateHospital = async (req, res) => {
    try {
        const updatedHospital = await Hospital.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(updatedHospital);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const getHospitalById = async (req, res) => {
    try {
        const { userId } = req.params;
        const hospital = await Hospital.findById(userId);

        if (!hospital) { 
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.json(hospital);
    } catch (error) { 
        res.status(500).json({ message: error.message });
    }
};

