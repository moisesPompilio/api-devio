import { Injectable } from '@nestjs/common';
import { Extra } from '@prisma/client';
import { CreateExtraDto } from '../dto/create-extra.dto';
import { CreateExtraUsecase } from '../../domain/usecase/create-extra.usecase';
import { GetAllExtraUsecase } from '../../domain/usecase/get-all-extra.usecase';
import { DeleteExtraUseCse } from '../../domain/usecase/delete-extra.usecase';
import { ExtraRepository } from '../../adapter/repository/extra.repository';
import { UpdateByIdExtraUsecase } from '../../domain/usecase/update-extra.usecase';

@Injectable()
export class ExtraService {
  constructor(private readonly extraRepository: ExtraRepository) {}

  async create(createExtraDto: CreateExtraDto): Promise<Extra> {
    const createExtraUsecase = new CreateExtraUsecase(this.extraRepository);
    const extra = await createExtraUsecase.handle(createExtraDto);
    return extra;
  }

  getAll() {
    const getAllExtraUsecase = new GetAllExtraUsecase(this.extraRepository);
    const categories = getAllExtraUsecase.handle();
    return categories;
  }

  async update(id: string, updateExtraDto: CreateExtraDto) {
    const updateExtraUsecase = new UpdateByIdExtraUsecase(this.extraRepository);
    await updateExtraUsecase.handle(updateExtraDto, id);
  }

  async delete(id: string) {
    const deleteExtraUseCse = new DeleteExtraUseCse(this.extraRepository);
    await deleteExtraUseCse.handle(id);
  }
}
