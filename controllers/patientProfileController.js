import Patient from "../models/patientProfile.js";

// Get all patient profiles
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient data", error });
  }
};

// Get a single patient by ID
export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient", error });
  }
};

// Create a new patient
export const createPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: "Error creating patient", error });
  }
};

// Update a patient's profile
export const updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPatient) return res.status(404).json({ message: "Patient not found" });
    res.json(updatedPatient);
  } catch (error) {
    res.status(400).json({ message: "Error updating patient", error });
  }
};

// Delete a patient
export const deletePatient = async (req, res) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient) return res.status(404).json({ message: "Patient not found" });
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting patient", error });
  }
};
