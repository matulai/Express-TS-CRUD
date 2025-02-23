import type { Request, Response } from "express";
import User from "@/model/user.js";
import UserService from "@/service/userService.js";

export default class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user: User = await this.userService.createUser(req.body);

      res.status(201).json(user);
    } catch (error) {
      res.status(409).json({ message: error });
    }
  }
}
