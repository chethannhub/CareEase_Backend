import mongoose from "mongoose";

let isConnected = false; 

export async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const dbName = process.env.MONGO_DB_NAME;
    const uri = `${process.env.MONGO_URI}${dbName}?retryWrites=true&w=majority`;
    
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);

    isConnected = true;
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error(`MongoDB Connection Failed: ${error.message}`);
    throw new Error(error.message);
  }
}
