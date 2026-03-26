import mongoose from "mongoose";

const connectDb = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/backendFoundation");
    console.log(" MongoDB connected via Mongoose");
  } catch (err) {
    console.error(" Connection failed:", err);
  }
};
export default connectDb;
