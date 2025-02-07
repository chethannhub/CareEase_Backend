import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: { type: String, required: false },
    age: { type: Number, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    gender: { type: String, required: false },
    address: { type: String, required: false },
    problem: { type: String, required: false },
    habits: {
        smokes: { type: Boolean, default: false },
        exercises: { type: Boolean, default: false },
        washesHands: { type: Boolean, default: false },
        healthyDiet: { type: Boolean, default: false },
        sanitizes: { type: Boolean, default: false },
    },
});

export const Patient = mongoose.model("Patient", patientSchema);
