import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { typeException } from 'src/shared/exception/type-http.exception';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
// eslint-disable-next-line import/extensions
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
// eslint-disable-next-line import/extensions
import { UserToken } from './models/UserToken';
// eslint-disable-next-line import/extensions
import { LoginRequestBody } from './models/LoginRequestBody';

// eslint-disable-next-line import/extensions

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: 200,
    description: 'Save Extra correct and return Extra',
    type: UserToken,
  })
  @ApiResponse({
    status: 500,
    description: 'internal error when doing the operation',
    type: typeException,
  })
  @ApiResponse({
    status: 400,
    description: 'request has an error',
    type: typeException,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized. access denied',
    type: typeException,
  })
  @ApiBody({ type: LoginRequestBody })
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
