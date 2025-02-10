import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    assignedTreatment: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, 
    type: { type: String, enum: ['Part-Time', 'Full-Time'], required: true } ,
    profile: { type: String, default: 'public/images/doctor_img.png' }, 
    days: { type: [Boolean], required: true }, 
    availableTimes: [String], 
    deleted: { type: Boolean, default: false },
    experience: { type: String, required: true }, 
    hospital:{ type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: false },
    language:{type: Array,required:true}

});

export const Doctor = mongoose.model("Doctor", doctorSchema);
