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
import adminRoutes from "./routes/adminRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await connectDB();
    return next();
  } catch (err) {
    return next(err);
  }
});

app.get("/", (req, res) => {
  console.log("Welcome to Care Ease Backend!");
  return res.send("Welcome to Care Ease Backend!");
});

app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/treatments", treatmentRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/beds", bedsRoutes);
app.use("/api/bills", billsRoutes);

if(process.env.NODE_ENV !== "Production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
  console.log(`Server is running locally on port http://localhost:${PORT}/`);
});
}

export default app;
