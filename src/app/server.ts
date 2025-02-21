import type { AddressInfo } from "node:net";
import type { Express } from "express";
import { userRouter } from "@/routes/userRouter.js";
import express from "express";
import http from "node:http";

export default class Server {
  private httpServer?: http.Server;
  private readonly app: Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.get("/", (_req, res) => {
      res.send("hello world");
    });
    this.app.use("/user", userRouter);
  }

  async start(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.app.listen(process.env.PORT ?? 3000, () => {
        const { port } = this.httpServer?.address() as AddressInfo;
        console.log(`----- App is ready and listening on port ${port} -----`);
        resolve();
      });
    });
  }
}
