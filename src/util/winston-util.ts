import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as winston from 'winston';
export function createDailyRotateTrasnport(level: string, filename: string) {
    return new DailyRotateFile({
      level,
      dirname: 'logs',
      filename: `${filename}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
      ),
    });
  }