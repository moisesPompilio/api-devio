import { IExtraRepository } from '../port/extra-repository.port';

export class DeleteExtraUseCse {
  constructor(private readonly ExtraRepository: IExtraRepository) {}

  async handle(id: string) {
    // uuidIsInvalid(id, 'id');
    // await this.getByIdExtraUseCase.handle(id);
    await this.ExtraRepository.deleteById(id);
  }
}
