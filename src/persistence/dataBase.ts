import { config } from "@/persistence/config/config.js";
import { DataSource } from "typeorm";

export const dataBase: DataSource = new DataSource(config);
