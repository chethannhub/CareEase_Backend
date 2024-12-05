import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    problem: { type: String, required: true },
    habits: {
        smokes: { type: Boolean, default: false },
        exercises: { type: Boolean, default: false },
        washesHands: { type: Boolean, default: false },
        healthyDiet: { type: Boolean, default: false },
        sanitizes: { type: Boolean, default: false },
    },
});

export const Patient = mongoose.model("Patient", patientSchema);
