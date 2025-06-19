import { Router } from "express";
import userController from "../controller/userController";

const userRouter = Router();

userRouter.route("/signup").post(userController.signup);
userRouter.route("/login").post(userController.login);

export default userRouter;
