import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    availableTimes: [String], 
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
