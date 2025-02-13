// models/beds.js
import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    problem: { type: String, default: "" },
    age: { type: Number, default: 0 },
  },
  { _id: false } // Embedded document; no separate _id for patient
);

const bedsSchema = new mongoose.Schema({
  bedid: { type: String, required: true },
  department: { type: String, required: true },
  status: { type: String, default: "Not Available" },
  patient: { type: patientSchema, default: {} },
  hospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: false },
  lastupdated: { type: Date, default: Date.now },
});

export const Beds = mongoose.model("Beds", bedsSchema);
