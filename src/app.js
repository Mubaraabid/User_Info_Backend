import express from "express";
import userRouter from "./router/user.js";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import cors from "cors"

connectDB();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  };
  
app.use(cors(corsOptions));
app.use( userRouter);
app.listen(3800,()=>{
    
    console.log("listening on port 3800");
})
