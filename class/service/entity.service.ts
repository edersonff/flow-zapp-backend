import { Injectable } from '@nestjs/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
  SaveOptions,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class Service<Entity> {
  constructor(private repository: Repository<Entity>) {}

  findAll(options: FindManyOptions<Entity>) {
    return this.repository.find(options);
  }

  findOne(options: FindOptionsWhere<Entity> | FindOptionsWhere<Entity>[]) {
    return this.repository.findOneBy(options);
  }

  async create(user: DeepPartial<Entity>, options?: SaveOptions) {
    await this.repository.save(user, options);
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }

  async update(id: number, user: QueryDeepPartialEntity<Entity>) {
    await this.repository.update(id, user);
  }
}
