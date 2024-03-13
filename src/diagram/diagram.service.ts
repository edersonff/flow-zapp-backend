import { Injectable } from '@nestjs/common';
import { Service } from 'class/service/entity.service';
import { Diagram } from './entities/diagram.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DiagramsService extends Service<Diagram> {
  constructor(
    @InjectRepository(Diagram)
    repository: Repository<Diagram>,
  ) {
    super(repository);
  }
}
