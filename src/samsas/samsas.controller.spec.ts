import { Test, TestingModule } from '@nestjs/testing';
import { SamsasController } from './samsas.controller';

describe('SamsasController', () => {
  let controller: SamsasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamsasController],
    }).compile();

    controller = module.get<SamsasController>(SamsasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
