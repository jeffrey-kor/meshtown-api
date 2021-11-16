import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { EntityNotFoundError } from "typeorm";

@Catch(EntityNotFoundError, Error)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {

  catch(exception: EntityNotFoundError, host: ArgumentsHost): any {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response
      .status(404)
      .json({
        message: {
          statusCode: 404,
          error: "Failed SQL Query",
          message: exception.message
        }
      });
  }

}