import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id:{
    type:"number",
    required:true,
  },
  name: {
    type: "string",
    required: true,
  },
  email:{
    type:"string",
    required: true,
  },
  phone:{
    type:"number",
    required:true,
  }
  
});

const userModel = mongoose.model("userinfo", userSchema);

export default userModel;