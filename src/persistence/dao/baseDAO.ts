import "@/persistence/dataSource.js";
import "reflect-metadata";

import { Repository, DataSource } from "typeorm";

import type { ObjectLiteral } from "typeorm";
/*
 * Basic queries for DAOs like save, remove, findById, etc.
 */
export default abstract class BaseDAO<T extends ObjectLiteral> {
  protected readonly repository: Repository<T>;

  constructor(dataSource: DataSource, entity: { new (...args: any[]): T }) {
    this.repository = dataSource.getRepository(entity);
  }

  async save(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  async remove(entity: T): Promise<T> {
    return await this.repository.remove(entity);
  }

  async findById(id: number): Promise<T> {
    return await this.repository.findOneByOrFail({ id } as any);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async removeAll(): Promise<void> {
    await this.repository.clear();
  }
}
