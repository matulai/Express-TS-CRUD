import { Router } from "express";
import UserController from "@/controllers/userController.js";

const userRouter: Router = Router();
const userController: UserController = new UserController();

userRouter.post("/", userController.saveUser.bind(userController));
userRouter.put("/", userController.updateUser.bind(userController));
userRouter.delete("/", userController.deleteUser.bind(userController));
userRouter.get("/all", userController.getAllUsers.bind(userController));
userRouter.get("/:id", userController.getUserById.bind(userController));

export { userRouter };
