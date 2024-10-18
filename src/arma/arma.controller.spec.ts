import { Test, TestingModule } from '@nestjs/testing';
import { ArmaController } from './arma.controller';
import { ArmaService } from './arma.service';

describe('ArmaController', () => {
  let controller: ArmaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArmaController],
      providers: [ArmaService],
    }).compile();

    controller = module.get<ArmaController>(ArmaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
