import { Doctor } from "../models/doctor.js";

export const createDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
        .populate("hospital","name");
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
            new: true, 
            runValidators: true, 
        });
        if (!updatedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.json(updatedDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        if (!deletedDoctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }
        res.json({ message: "Doctor deleted successfully", doctor: deletedDoctor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// export const deleteDoctor = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const deletedDoctor = await Doctor.findByIdAndUpdate(
//             id, 
//             { deleted: true }, 
//             { new: true } 
//         );

//         if (!deletedDoctor) {
//             return res.status(404).json({ message: "Doctor not found" });
//         }

//         res.json({
//             message: "Doctor soft deleted successfully",
//             doctor: deletedDoctor
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


