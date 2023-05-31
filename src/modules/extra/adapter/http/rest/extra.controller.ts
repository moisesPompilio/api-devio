import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { IsFuncionarioRule } from 'src/auth/decorators/is-funcionario-rule.decorator';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Extra } from 'src/modules/extra/domain/entities/extra.entity';
import { typeException } from 'src/shared/exception/type-http.exception';
import { ExtraService } from '../../../aplication/service/extra.service';
import { CreateExtraDto } from '../../../aplication/dto/create-extra.dto';

@ApiTags('extra')
@Controller('extra')
export class ExtraController {
  constructor(private readonly extraService: ExtraService) {}

  @ApiResponse({
    status: 201,
    description: 'Save Extra correct and return Extra',
    type: Extra,
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
  @ApiBearerAuth()
  @Post()
  create(
    @Body() createExtraDto: CreateExtraDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @IsFuncionarioRule() _: undefined,
  ) {
    return this.extraService.create(createExtraDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get extra sucess',
    type: Extra,
    isArray: true,
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
  @Get()
  @IsPublic()
  findAll() {
    return this.extraService.getAll();
  }

  @ApiResponse({
    status: 200,
    description: 'upadte extra sucess',
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
  @Put(':id')
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateExtraDto: CreateExtraDto,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @IsFuncionarioRule() _: undefined,
  ) {
    return this.extraService.update(id, updateExtraDto);
  }

  @ApiResponse({
    status: 200,
    description: 'delete extra sucess',
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
  @ApiBearerAuth()
  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(@Param('id') id: string, @IsFuncionarioRule() _: undefined) {
    return this.extraService.delete(id);
  }
}
