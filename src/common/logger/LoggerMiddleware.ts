import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from './LoggerService';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  constructor() {}

  use(req: Request, res: Response, next: Function) {
    const loggerService = new LoggerService(req.url.slice(1).split("/")[0]);
    const temporaryURL = req.method + " " + req.url.split("?")[0];
    const headers = JSON.stringify(req.headers ? req.headers : {});
    const _query = JSON.stringify(req.query ? req.query : {});
    const body = JSON.stringify(req.body ? req.body : {});
    const url = JSON.stringify(temporaryURL ? temporaryURL : {});

    loggerService.log(`${url} ${headers} ${_query} ${body}`.replace(/ww/, ""));
    next();
  }

}