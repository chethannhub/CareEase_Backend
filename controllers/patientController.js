import { Patient } from "../models/patient.js";

export const createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
<<<<<<< Updated upstream
=======

export const getPatientById = async (req, res) => {
    try {
        const { userId } = req.params;
        const patient = await Patient.findById(userId);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json(patient);
    } catch (error) { 
        res.status(500).json({ message: error.message });
    }
};

export const getPatients_email_password = async (req, res) => {
    try {
        const patients = await Patient.find({}, "email password"); 
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

>>>>>>> Stashed changes
