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
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ExtraService } from '../../../aplication/service/extra.service';
import { CreateExtraDto } from '../../../aplication/dto/create-extra.dto';

@ApiTags('extra')
@Controller('extra')
export class ExtraController {
  constructor(private readonly extraService: ExtraService) {}

  @ApiOperation({
    summary: 'responsible for doing all the CRUD of the extra',
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

  @Get()
  @IsPublic()
  findAll() {
    return this.extraService.getAll();
  }

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

  @ApiBearerAuth()
  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(@Param('id') id: string, @IsFuncionarioRule() _: undefined) {
    return this.extraService.delete(id);
  }
}
