import { IExtraRepository } from '../port/extra-repository.port';

export class GetAllExtraUsecase {
  constructor(private readonly ExtraRepository: IExtraRepository) {}

  async handle() {
    const extras = await this.ExtraRepository.getAll();
    return extras;
  }
}
