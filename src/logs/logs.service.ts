import { Injectable } from '@nestjs/common';
import { Service } from 'class/service/entity.service';
import { Log } from './entities/log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LogsService extends Service<Log> {
  constructor(
    @InjectRepository(Log)
    repository: Repository<Log>,
  ) {
    super(repository);
  }
}
