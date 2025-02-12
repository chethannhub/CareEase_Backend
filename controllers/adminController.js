import Admin from '../models/Admin.js';

export const createAdmin = async (req, res) => {
    try {
        let { email, name } = req.body;

        if (!name && email) {
            name = email.split("@")[0]; 
        }
        const admin = await Admin.create({ ...req.body, name });

        res.status(201).json(admin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.find()
            .populate("hospital", "name");
        if (!admin) return res.status(404).json({ message: "Admin not found" });
        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateAdminProfile = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findOneAndUpdate({}, req.body, { new: true, upsert: true });
        res.json(updatedAdmin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const getAdminById = async (req, res) => {
    try {
        const { userId } = req.params;
        const admin = await Admin.findById(userId)
            .populate("hospital", "name");

        if (!admin) { 
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.json(admin);
    } catch (error) { 
        res.status(500).json({ message: error.message });
    }
};

export const getAdmin_email_password = async (req, res) => {
    try {
        const admin = await Admin.find({}, "email password"); 
        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};