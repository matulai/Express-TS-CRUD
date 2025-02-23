import UserDAO from "@/persistence/dao/userDAO.js";
import User from "@/model/user.js";

export default class UserService {
  private readonly userDAO: UserDAO;

  constructor() {
    this.userDAO = new UserDAO();
  }

  async saveUpdateUser(user: User): Promise<User> {
    return this.userDAO.save(user);
  }

  async findUserById(id: number): Promise<User> {
    return this.userDAO.findById(id);
  }

  async findAllUsers(): Promise<User[]> {
    return this.userDAO.findAll();
  }

  async removeUser(user: User): Promise<void> {
    this.userDAO.remove(user);
  }

  async clearAll(): Promise<void> {
    this.userDAO.removeAll();
  }
}
