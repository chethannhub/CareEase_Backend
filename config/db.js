import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbName = process.env.MONGO_DB_NAME;
    const uri = `mongodb+srv://chethann:care%40123@careease.kpw50.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=CareEase`;

    console.log(`Connecting to mongoDB`);
    
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`MongoDB connected successfully to ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.error(`MongoDB Connection Failed!: ${error.message}`);
    process.exit(1);
  }
};
