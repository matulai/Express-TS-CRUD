import { DataSource } from "typeorm";
import { dataSourceI } from "@/persistence/dataSource.js";
import BaseDAO from "@/persistence/dao/baseDAO.js";
import User from "@/model/user.js";

export default class UserDAO extends BaseDAO<User> {
  constructor(newDataSourceI: DataSource = dataSourceI) {
    super(newDataSourceI, User);
  }
}
