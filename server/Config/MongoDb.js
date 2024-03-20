/* eslint-env node */

import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected to database");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
