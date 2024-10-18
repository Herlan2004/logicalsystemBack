import { Test, TestingModule } from '@nestjs/testing';
import { AguaController } from './agua.controller';
import { AguaService } from './agua.service';

describe('AguaController', () => {
  let controller: AguaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AguaController],
      providers: [AguaService],
    }).compile();

    controller = module.get<AguaController>(AguaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
