import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true, onDelete: 'SET NULL' },
    time: { type: String, required: true },
    date: { type: String, required: true },
    type: { type: String, default: "General Checkup" },
    problem: { type: String, required: true },
    status: { type: String, default: "Registered" },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
