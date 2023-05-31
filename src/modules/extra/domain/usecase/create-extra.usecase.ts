import { CreateExtraDto } from '../../aplication/dto/create-extra.dto';
import { Extra } from '../entities/extra.entity';
import { IExtraRepository } from '../port/extra-repository.port';

export class CreateExtraUsecase {
  constructor(private readonly ExtraRepository: IExtraRepository) {}

  async handle(inputExtraDTO: CreateExtraDto): Promise<Extra> {
    // const existingExtra = await this.ExtraRepository.getByName(
    //   inputExtraDTO.name,
    // );
    // if (this.ExtraNameExists(existingExtra, inputExtraDTO)) {
    //   return Promise.reject(new Error('Extra name already exists'));
    // }
    const extra = new Extra(inputExtraDTO);
    await this.ExtraRepository.create(extra);
    return extra;
  }

  //   private ExtraNameExists(
  //     existingExtra: Extra,
  //     inputExtraDTO: IInputExtraDTO,
  //   ): boolean {
  //     return (
  //       existingExtra !== null &&
  //       existingExtra.name === inputExtraDTO.name
  //     );
  //   }
}
