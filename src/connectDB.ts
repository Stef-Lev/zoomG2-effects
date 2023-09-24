import mongoose from "mongoose";
import { IDBConnection } from "@/types/types";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<IDBConnection> => {
  mongoose.set("strictQuery", false);
  const mongoDBUri = process.env.MONGODB_URI;

  if (!mongoDBUri) {
    throw new Error("MONGODB_URI environment variable is not defined.");
  }
  try {
    await mongoose.connect(mongoDBUri);
    return {
      connection: mongoose.connection,
      async closeConnection() {
        await mongoose.connection.close();
      }
    };
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export default connectDB;
