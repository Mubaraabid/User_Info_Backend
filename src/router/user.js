import {Router} from "express";
import userController from "../controller/user.js";

const userRouter=new Router();
userRouter.get("/userlist", userController.getAll);
userRouter.post("/usercreate",userController.create);
userRouter.get("/userdelete/:id",userController.delete);
userRouter.get("/userview/:id",userController.getSingle);
userRouter.post("/userupdate/:id",userController.update);
export default userRouter;