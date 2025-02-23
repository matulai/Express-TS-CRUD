import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "@/model/user.js";
import UserService from "@/service/userService.js";

export default class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async saveUser(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    try {
      const user: User = await this.userService.saveUpdateUser(req.body);

      res.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).json({ message: error });
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    try {
      const user: User = await this.userService.saveUpdateUser(req.body);

      res.status(StatusCodes.OK).json(user);
    } catch (error) {
      res.status(StatusCodes.CONFLICT).json({ message: error });
    }
  }

  async getAllUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users: User[] = await this.userService.findAllUsers();

      res.status(StatusCodes.OK).json(users);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const id: number = Number(req.params.id);

      const user: User = await this.userService.findUserById(id);

      res.status(StatusCodes.OK).json(user);
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).json({ message: error });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await this.userService.removeUser(req.body);

      res.status(StatusCodes.OK).json({ message: "action successs" });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).json({ message: error });
    }
  }
}
