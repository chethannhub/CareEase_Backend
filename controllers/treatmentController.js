import Treatment from "../models/Treatment.js"; // Import the Treatment model

// Get all treatments
export const getTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find(); // Fetch all documents from the 'treatments' collection
    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching treatments", error });
  }
};

// Add a new treatment
export const addTreatment = async (req, res) => {
  try {
    const { name, price, duration, type } = req.body;

    if (!name || !price || !duration || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newTreatment = new Treatment({ name, price, duration, type }); // Create a new treatment document
    await newTreatment.save(); // Save the document in the 'treatments' collection

    res.status(201).json(newTreatment);
  } catch (error) {
    res.status(500).json({ message: "Error adding treatment", error });
  }
};

// Delete a treatment by ID
export const deleteTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTreatment = await Treatment.findByIdAndDelete(id); // Delete the document with the specified ID

    if (!deletedTreatment) {
      return res.status(404).json({ message: "Treatment not found" });
    }

    res.status(200).json({ message: "Treatment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting treatment", error });
  }
};

// Search treatments by name
export const searchTreatments = async (req, res) => {
  try {
    const { query } = req.query;
    const treatments = await Treatment.find({
      name: { $regex: query, $options: "i" }, // Case-insensitive search
    });

    res.status(200).json(treatments);
  } catch (error) {
    res.status(500).json({ message: "Error searching treatments", error });
  }
};
