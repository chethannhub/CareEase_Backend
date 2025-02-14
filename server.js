import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; 

import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import treatmentRoutes from "./routes/treatmentRoutes.js";
import bedsRoutes from "./routes/bedsRoutes.js";
import billsRoutes from "./routes/billsRoutes.js";
import adminRoutes from './routes/adminRoutes.js';
import hospitalRoutes from './routes/hospitalRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Welcome to Care Ease Backend! 🚀");
  console.log("Welcome to Care Ease Backend! 🚀");
 
  setTimeout(() => {
      console.log("Message sent after 5 seconds!");
  }, 5000); 

  setTimeout(() => {
      console.log("Message sent after 10 seconds!");
  }, 10000);
});


app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/treatments", treatmentRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/beds", bedsRoutes);
app.use("/api/bills", billsRoutes);

const PORT = process.env.PORT || 5001;

if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } 

export default app;