import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LogsModule } from '../logs/logs.module';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
