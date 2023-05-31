import { ApiProperty } from '@nestjs/swagger';

export class typeException {
  @ApiProperty({
    description: 'error status',
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    description: 'error message',
    example: 'Somente funcionários podem acessar essa rota',
  })
  message: string | string[];

  @ApiProperty({
    description: 'error code',
    example: 'Unauthorized',
  })
  error: string;
}
