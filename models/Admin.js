// models/Admin.js
import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    department: String,
    lastLogin: Date,
    profilePic: String,
    permissions: [String]
});

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;