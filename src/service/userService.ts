import UserDAO from "@/persistence/dao/userDAO.js";
import User from "@/model/user.js";

export default class UserService {
  private readonly userDAO: UserDAO;

  constructor() {
    this.userDAO = new UserDAO();
  }

  async createUser(user: User): Promise<User> {
    console.log(user);
    return this.userDAO.save(user);
  }

  async saveOrUpdateUser(user: User): Promise<User> {
    return this.userDAO.save(user);
  }

  async findUserById(id: number): Promise<User> {
    return this.userDAO.findById(id);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userDAO.findAll();
  }
}
