import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LogsModule } from '../logs/logs.module';
import { CatsModule } from '../cats/cats.module';
import { UserMiddleware } from '../middleware/userMiddleware';

@Module({
  imports:[CatsModule],
  controllers: [UserController],
  providers: [UserService]
})
  //implements NestModule
export class UserModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(UserMiddleware)
  //     .forRoutes('user');
  // }
}
