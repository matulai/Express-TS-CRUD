import { describe, afterEach, expect, test } from "vitest";
// @ts-ignore
import UserService from "@/service/userService.ts";
// @ts-ignore
import User from "@/model/user.ts";

let userService: UserService = new UserService();

afterEach(async () => {
  userService.clearAll();
});

describe("Tests for UserService", () => {
  const testUser: User = {
    name: "leo",
    age: 5,
    gender: "male",
  };

  test("Save a user and get all after", async () => {
    const newUser = await userService.saveUpdateUser(testUser);

    expect(newUser.id).toBeDefined();
    const data: User[] = await userService.findAllUsers();
    expect(data.length).toBe(1);
  });

  test("Get an user by id", async () => {
    const newUser: User = await userService.saveUpdateUser(testUser);

    expect(newUser.id).toBeDefined();
    const user: User = await userService.findUserById(newUser.id!);
    expect(user.id).toBe(newUser.id);
  });

  test("Save an user", async () => {
    const newUser: User = await userService.saveUpdateUser(testUser);

    expect(newUser.id).toBeDefined();
  });

  test("Se actualiza un usuario existente", async () => {
    const newUser: User = await userService.saveUpdateUser(testUser);

    expect(newUser.id).toBeDefined();

    const updatedUser: User = await userService.saveUpdateUser({
      id: newUser.id!,
      name: "Lalo",
      age: 7,
      gender: "Male",
    });

    expect(updatedUser.id).toBe(newUser.id);
    expect(updatedUser.name).toBe("Lalo");
  });
});
