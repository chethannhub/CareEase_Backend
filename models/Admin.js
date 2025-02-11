// models/Admin.js
import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    department: String,
    lastLogin: Date,
    profilePic: String,
    permissions: [String],
    hospital:{ type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: false },
});

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;