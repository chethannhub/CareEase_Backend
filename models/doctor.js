import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    assignedTreatment: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, 
    type: { type: String, enum: ['Part-Time', 'Full-Time'], required: true } ,
    profile: { type: String, default: './icons/Profile_icon.svg' }, 
    days: { type: [Boolean], required: true }, 
    availableTimes: [String], 
    deleted: { type: Boolean, default: false }
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
