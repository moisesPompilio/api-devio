import { ApiProperty } from '@nestjs/swagger';

export class UserToken {
  @ApiProperty({
    description: 'access token',
    example: 'dnjafdhkjbajknldxjscbhgdkajxsnaj',
  })
  access_token: string;

  @ApiProperty({
    description: 'user role',
    example: 'USUARIO',
  })
  role: string;
}
