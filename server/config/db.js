import mongoose from "mongoose";

const connectToMongo = async () => {
  mongoose.set('strictQuery', false);
  const res = await mongoose.connect(
   
    "mongodb://127.0.0.1/mernchat"
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
