import { Injectable, LoggerService as LoggerServices, LogLevel } from '@nestjs/common';

import { utilities as nestWinstonModuleUtilities } from "nest-winston";

import * as Winston from 'winston';
import * as moment from 'moment';

@Injectable()
export class LoggerService implements LoggerServices {

  private logger: Winston.Logger;

  constructor(service) {

    this.logger = Winston.createLogger({

      format: Winston.format.combine(
        Winston.format.errors({ stack: true }),
        Winston.format.json(),
        Winston.format.timestamp({ format: "isoDateTime" }),
        Winston.format.ms(),
        Winston.format.prettyPrint()
      ),
      defaultMeta: { service },
      transports: [
        new Winston.transports.File({
          level: "error",
          filename: `error-${moment(new Date()).format("YYYY-MM-DD")}.log`,
          dirname: "logs",
          maxsize: 5000000,
        }),
        new Winston.transports.Console({
          level: "debug",
          format: Winston.format.combine(nestWinstonModuleUtilities.format.nestLike()),
        }),
        new Winston.transports.File({
          filename: `application-${moment(new Date()).format("YYYY-MM-DD")}.log`,
          dirname: "logs",
          maxsize: 5000000
        }),
      ],
    });

    console.log = (message: any, params?: any) => {
      this.logger.debug(message, params);
    };
  }

  log(message: string) {
    this.logger.info(message);
  }
  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }
  warn(message: string) {
    this.logger.warning(message);
  }
  debug(message: string) {
    this.logger.debug(message);
  }
  verbose(message: string) {
    this.logger.verbose(message);
  }

}