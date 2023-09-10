import mongoose from "mongoose";

const connectDB = async () => {
  const uri= "mongodb+srv://mubaraabid9:mubara09@cluster0.sfdo7ab.mongodb.net/User_info"
  // const uri = "mongodb://127.0.0.1:27017/User_info";
  console.log("")
  mongoose
    .connect(uri, {
      autoCreate: true,
      autoIndex: true,
    })
    .then((res) => {
      console.log("Connected db connection");
    })
    .catch((err) => {
      console.log("Error connecting db connection", err);
    });
};

export default connectDB;