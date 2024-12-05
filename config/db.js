import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbName = process.env.MONGO_DB_NAME;
    const uri = `mongodb+srv://chethann:care%40123@careease.kpw50.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=CareEase`;

    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`MongoDB connected successfully to ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
