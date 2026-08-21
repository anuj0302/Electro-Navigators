import mongoose from "mongoose";

const ConnectToMongoDB = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URL);

    console.log(`\nMongoDB connected ! DB host: ${connected.connection.host}`);
  } catch (error) {
    console.error("Mongo DB connection error!!", error);
  }
};

export default ConnectToMongoDB;

