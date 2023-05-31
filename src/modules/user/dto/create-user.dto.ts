import {
  IsEmail,
  IsEnum,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum Role {
  FUNCIONARIO = 'FUNCIONARIO',
  USUARIO = 'USUARIO',
}
export class CreateUserDto {
  @ApiProperty({
    description: 'user email. it is needed to login',
    example: 'example@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description:
      'user password, must have more than 4 characters and cannot exceed 20, and must contain a special character, a capital letter and a number. it is needed to login',
    example: 'Example@1',
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({
    description: 'user name',
    example: 'example',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description:
      'role of the user, to identify if he is an "FUNCIONARIO" or "USUARIO"',
    example: 'USUARIO',
  })
  @IsString()
  @IsEnum(Role)
  role: 'FUNCIONARIO' | 'USUARIO';
}
