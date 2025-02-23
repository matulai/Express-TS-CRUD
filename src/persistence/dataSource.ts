import { config } from "@/persistence/config/config.js";
import { DataSource } from "typeorm";

export const dataSourceI: DataSource = new DataSource(config);

dataSourceI
  .initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch(error => console.log(error));
