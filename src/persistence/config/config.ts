import User from "@/model/user.js";
import type { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User], // Aquí defines los modelos (entidades)
};
