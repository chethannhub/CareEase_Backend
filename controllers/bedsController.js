// controllers/bedsController.js
import { Beds } from "../models/beds.js";

export const createBeds = async (req, res) => {
  try {
    // If lastupdated is not provided, set it to current date/time
    if (!req.body.lastupdated) {
      req.body.lastupdated = Date.now();
    }
    const bed = await Beds.create(req.body);
    res.status(201).json(bed);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBeds = async (req, res) => {
  try {
    const beds = await Beds.find();
    res.status(200).json(beds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBed = async (req, res) => {
  const { bedId } = req.params;
  const { department, patient, status } = req.body;
  try {
    const bed = await Beds.findByIdAndUpdate(
      bedId,
      { department, patient, status, lastupdated: Date.now() },
      { new: true, runValidators: true } // runValidators added to force proper casting/validation
    );
    if (!bed) {
      return res.status(404).json({ message: "Bed not found" });
    }
    res.status(200).json(bed);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
