import { CreateExtraDto } from '../../aplication/dto/create-extra.dto';
import { Extra } from '../entities/extra.entity';
import { IExtraRepository } from '../port/extra-repository.port';

export class UpdateByIdExtraUsecase {
  constructor(
    private readonly ExtraRepository: IExtraRepository, // private readonly getByIdExtraUseCase: GetByIdExtraUseCase,
  ) {}

  async handle(inputExtraDTO: CreateExtraDto, id: string) {
    // uuidIsInvalid(id, 'id');
    // await this.getByIdExtraUseCase.handle(id);
    // const ExtraToCheckForDuplicates =
    //   await this.ExtraRepository.getByName(inputExtraDTO.name);
    // if (
    //   this.isExtraNameDuplicated(
    //     ExtraToCheckForDuplicates,
    //     inputExtraDTO,
    //     id,
    //   )
    // ) {
    //   return Promise.reject(
    //     new Error('Extra name is already being used by another Extra'),
    //   );
    // }
    const extra = new Extra(inputExtraDTO, id);
    await this.ExtraRepository.updateById(extra);
  }

  //   private isExtraNameDuplicated(
  //     ExtraToCheckForDuplicates: Extra,
  //     inputExtraDTO: IInputExtraDTO,
  //     id: string,
  //   ): boolean {
  //     return (
  //       ExtraToCheckForDuplicates !== null &&
  //       ExtraToCheckForDuplicates.name === inputExtraDTO.name &&
  //       ExtraToCheckForDuplicates.id !== id
  //     );
  //   }
}
