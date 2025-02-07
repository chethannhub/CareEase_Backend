import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  type: { type: String, required: true }, 
  rating: { type: String, default: "No Rating" },
  reviews: { type: String, default: "0" },
});

export default mongoose.model("Treatment", treatmentSchema);
