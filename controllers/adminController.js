import Admin from '../models/Admin.js';

export const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findOne();
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