import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { validate } from 'class-validator';
// eslint-disable-next-line import/extensions
import { LoginRequestBody } from '../models/LoginRequestBody';

@Injectable()
export class LoginValidationMiddleware implements NestMiddleware {
  // eslint-disable-next-line class-methods-use-this
  async use(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    const loginRequestBody = new LoginRequestBody();
    loginRequestBody.email = body.email;
    loginRequestBody.password = body.password;

    const validations = await validate(loginRequestBody);

    if (validations.length) {
      throw new BadRequestException(
        validations.reduce((acc, curr) => {
          return [...acc, ...Object.values(curr.constraints)];
        }, []),
      );
    }

    next();
  }
}
