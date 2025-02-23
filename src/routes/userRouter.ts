import { Router } from "express";
import UserController from "@/controllers/userController.js";

const userRouter: Router = Router();
const userController: UserController = new UserController();

userRouter.post("/", userController.createUser);

export { userRouter };
