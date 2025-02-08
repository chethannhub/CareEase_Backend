// seed.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js'; // Make sure your connectDB function uses ES module syntax
import Admin from './models/Admin.js';
// Uncomment and import other models as needed
// import Patient from './models/Patient.js';
// import Doctor from './models/Doctor.js';
// import Appointment from './models/Appointment.js';
// import Treatment from './models/Treatment.js';
// import Bed from './models/Bed.js';
// import Bill from './models/Bill.js';

dotenv.config();

// Connect to the database
await connectDB();

const seedDatabase = async () => {
  try {
    // --- Seed Admin Data ---
    // Clear existing data
    await Admin.deleteMany();

    // Create dummy admin data
    const adminData = [
      {
        name: "Admin One",
        email: "admin1@example.com",
        role: "Super Admin",
        department: "Administration",
        lastLogin: new Date(),
        profilePic: "https://via.placeholder.com/150",
        permissions: ["Full Access", "User Management", "System Config"],
      },
      {
        name: "Admin Two",
        email: "admin2@example.com",
        role: "Admin",
        department: "Operations",
        lastLogin: new Date(),
        profilePic: "https://via.placeholder.com/150",
        permissions: ["Limited Access", "User Management"],
      },
      // Add as many admin objects as you need...
    ];

    await Admin.insertMany(adminData);
    console.log("Admin data seeded successfully.");

    // --- Repeat for other models as needed ---
    // Example for patients:
    // await Patient.deleteMany();
    // const patientsData = [
    //   { name: "John Doe", age: 30, email: "john@example.com", ... },
    //   { name: "Jane Smith", age: 25, email: "jane@example.com", ... },
    // ];
    // await Patient.insertMany(patientsData);
    // console.log("Patient data seeded successfully.");

    // When done seeding all collections:
    process.exit();
  } catch (error) {
    console.error("Error seeding database: ", error);
    process.exit(1);
  }
};

seedDatabase();
