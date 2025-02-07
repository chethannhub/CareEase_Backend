import mongoose from "mongoose";

const bedsSchema = new mongoose.Schema({
    bedid: { type: String, required: true },
    department: { type: String, required: true },
    status: { type: String, default: "Not Available" }, 
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: false },
    lastupdated:{type: Date, required: true }
});

export const Beds = mongoose.model("Beds", bedsSchema);

