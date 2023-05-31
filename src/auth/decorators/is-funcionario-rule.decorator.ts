import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
// eslint-disable-next-line import/extensions
import { AuthRequest } from '../models/AuthRequest';

export const IsFuncionarioRule = createParamDecorator(
  (data: unknown, context: ExecutionContext): void => {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    if (!request.user.role.includes('FUNCIONARIO')) {
      throw new UnauthorizedException(
        'Somente funcionários podem acessar essa rota',
      );
    }
  },
);
