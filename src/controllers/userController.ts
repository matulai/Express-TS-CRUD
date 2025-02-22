import type { Request, Response } from "express";

export default class UserController {
  createUser(_req: Request, res: Response): void {
    res.send({ name: "Matias" });
  }
}
