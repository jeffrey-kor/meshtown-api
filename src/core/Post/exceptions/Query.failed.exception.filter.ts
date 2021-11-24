import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { QueryFailedError } from "typeorm";

@Catch(QueryFailedError, Error)
export class QueryFailedExceptionFilter implements ExceptionFilter {

  catch(exception: QueryFailedError, host: ArgumentsHost): any {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response
      .status(404)
      .json({
        message: {
          statusCode: 404,
          error: "Not Found",
          message: exception.message
        }
      });
  }

}