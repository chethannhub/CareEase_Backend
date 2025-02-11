import mongoose from "mongoose";

// Define the Hospital schema
const hospitalSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
});

// Create the Hospital model and export it as a named export
export const Hospital = mongoose.model("Hospital", hospitalSchema);
