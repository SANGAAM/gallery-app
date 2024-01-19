import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
    "mongodb://0.0.0.0/mernchat"
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
