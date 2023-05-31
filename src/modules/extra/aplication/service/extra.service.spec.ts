import { Test, TestingModule } from '@nestjs/testing';
import { ExtraService } from './aplication/service/extra.service';

describe('ExtraService', () => {
  let service: ExtraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtraService],
    }).compile();

    service = module.get<ExtraService>(ExtraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
