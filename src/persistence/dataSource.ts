import { config } from "@/persistence/config/config.js";
import { DataSource } from "typeorm";

export const dataSourceI: DataSource = new DataSource(config);
