import { Repository } from "typeorm";
import { DataSource } from "typeorm";
import { dataSourceI } from "@/persistence/dataSource.js";
import User from "@/model/user.js";

export default class UserDAO {
  private readonly dataSource: DataSource;
  private readonly repository: Repository<User>;

  constructor(newDataSourceI: DataSource = dataSourceI) {
    this.dataSource = newDataSourceI;
    this.repository = this.dataSource.getRepository(User);
  }

  createOrUpdateUser(user: User): Promise<User> {
    return this.repository.save(user);
  }

  removeUser(user: User): Promise<User> {
    return this.repository.remove(user);
  }

  getUserById(id: number): Promise<User> {
    return this.repository.findOneByOrFail({ id: id });
  }

  getAllUser(): Promise<User[]> {
    return this.repository.find();
  }
}
