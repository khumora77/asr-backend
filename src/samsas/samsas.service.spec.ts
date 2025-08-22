import { Test, TestingModule } from '@nestjs/testing';
import { SamsasService } from './samsas.service';

describe('SamsasService', () => {
  let service: SamsasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamsasService],
    }).compile();

    service = module.get<SamsasService>(SamsasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
