import { Injectable } from '@nestjs/common';
import { Service } from 'class/service/entity.service';
import { NumberEntity } from './entities/number.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NumbersService extends Service<NumberEntity> {
  constructor(
    @InjectRepository(NumberEntity)
    repository: Repository<NumberEntity>,
  ) {
    super(repository);
  }
}
