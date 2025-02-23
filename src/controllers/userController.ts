import type { Request, Response } from "express";
import User from "@/model/user.js";
import UserService from "@/service/userService.js";

export default class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async saveUpdateUser(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    try {
      const user: User = await this.userService.saveUpdateUser(req.body);

      res.status(201).json(user);
    } catch (error) {
      res.status(409).json({ message: error });
    }
  }

  async getAllUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users: User[] = await this.userService.findAllUsers();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const id: number = Number(req.params.id);

      const user: User = await this.userService.findUserById(id);

      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await this.userService.removeUser(req.body);

      res.status(200).json({ message: "action successs" });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
}
