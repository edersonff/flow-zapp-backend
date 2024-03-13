import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { NumbersModule } from './numbers/numbers.module';
import { LogsModule } from './logs/logs.module';
import { FlowModule } from './flow/flow.module';
import { DiagramModule } from './diagram/diagram.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: (process.env.DB_TYPE as 'mysql') || 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'root',
      entities: [User],
      database: process.env.DB_NAME || 'flow-zapp',
      synchronize: true,
      logging: true,
    }),
    AuthModule,
    UsersModule,
    NumbersModule,
    LogsModule,
    FlowModule,
    DiagramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
