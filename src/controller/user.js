import userModel from "../model/user.js";
import mongoose from "mongoose";

const userController = {
  getAll: async (req, res) => {
    const userlist = await userModel.find();
    return res.status(200).json(userlist);
  },

    getSingle: async (req, res) => {
        const id=req.params.id;
        const details = await userModel.find({id: id});
        if (details)
        {
          return res.status(200).json({message:"User Details",details});
        }
        return res.status(404).json({message:"User not found"});
    },

  create: async (req, res) => {
    const postreq=req.body;
    const User = await userModel.create(postreq);
    return res.status(201).json({message:"User created successfully", User});
  },

  update: async (req, res) => {
    const id=req.params.id;
    const updatedata=req.body;
    
    const update=await userModel.updateOne({id:id},updatedata); 
    if (update)
    return res.status(201).json({ message: "User updated successfully",update });
    else
    return res.status(404).json({message:"User not Found"});
    
  },
 
  delete: async (req, res) => {
    const id=req.params.id;
    const find = await userModel.find({id:id});
    
    if (find)
    {
      const del=await userModel.deleteOne({id: id});
       return res.status(204).json({ message: "User deleted successfully",del });
    }
   return res.status(404).json({message:"User not found"});
  },
};

export default userController;