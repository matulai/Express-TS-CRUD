import { config } from "@/persistence/config/config.js";
import mysql from "mysql2";

export const database = mysql.createConnection(config);
