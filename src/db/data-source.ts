import { config } from 'dotenv';
import { User } from '../users/entities/user.entity';
import { Diagram } from '../diagram/entities/diagram.entity';
import { Flow } from '../flow/entities/flow.entity';
import { Log } from '../logs/entities/log.entity';
import { NumberEntity } from '../numbers/entities/number.entity';
import { Job } from '../jobs/entities/job.entity';
import { DataSourceOptions } from 'typeorm';

config();

export const dataSourceOptions: DataSourceOptions = {
  type: (process.env.DB_TYPE as 'mysql') || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'root',
  entities: [User, Diagram, Flow, Job, Log, NumberEntity],
  database: process.env.DB_NAME || 'flow-zapp',
  synchronize: false,
  logging: true,
  ssl: process.env.DB_SSL === 'true',
};
