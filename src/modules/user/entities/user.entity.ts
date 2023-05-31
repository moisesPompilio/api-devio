import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: 'user id',
    example: 'uuid',
  })
  id?: string;

  @ApiProperty({
    description: 'user email',
    example: 'example@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'user password',
    example: 'Example@1',
    minLength: 4,
    maxLength: 20,
  })
  password: string;

  @ApiProperty({
    description: 'user name',
    example: 'example',
  })
  name: string;

  @ApiProperty({
    description:
      'role of the user, to identify if he is an "FUNCIONARIO" or "USUARIO"',
    example: 'example',
  })
  role: string;
}
