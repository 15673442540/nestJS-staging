import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './filters/HttpExceptionFilter';
import { WINSTON_MODULE_NEST_PROVIDER, WINSTON_MODULE_PROVIDER, WinstonModule, utilities } from 'nest-winston';
import { Inject } from '@nestjs/common';
import { createLogger } from 'winston';
import * as winston from 'winston';
import { LogsModule } from './logs/logs.module';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { Console } from 'winston/lib/winston/transports';
import { createDailyRotateTrasnport } from './util/winston-util'
async function bootstrap() {

  const instance = createLogger({
    // options of Winston
    transports: [
      new Console({
        level: 'info',
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike(),
        ),
      }),
      // events - archive rotate
      createDailyRotateTrasnport('warn','application')
    ],
  });

  const logger = WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        level: 'info',
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike(),
        ),
      }),
      // events - archive rotate
      new winston.transports.DailyRotateFile({
        level: 'warn',
        dirname: 'logs',
        filename: 'application-%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.simple(),
        ),
      }),
    ],
  });

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 允许跨域
    cors: true,
    logger
  });
  app.useGlobalFilters(new HttpExceptionFilter(logger));

  await app.listen(3000);
}
bootstrap();
