import { Injectable } from '@nestjs/common';
import { Service } from 'class/service/entity.service';
import { Flow } from './entities/flow.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FlowsService extends Service<Flow> {
  constructor(
    @InjectRepository(Flow)
    repository: Repository<Flow>,
  ) {
    super(repository);
  }
}
