import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  birthday: { type: Date, required: true },
  profilePic: { type: String, default: "" },
  credit: { type: String, default: "$0.00" },
  balance: { type: String, default: "$0.00" },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
