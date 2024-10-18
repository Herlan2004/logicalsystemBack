import { Test, TestingModule } from '@nestjs/testing';
import { SituacionCombateController } from './situacion_combate.controller';
import { SituacionCombateService } from './situacion_combate.service';

describe('SituacionCombateController', () => {
  let controller: SituacionCombateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SituacionCombateController],
      providers: [SituacionCombateService],
    }).compile();

    controller = module.get<SituacionCombateController>(SituacionCombateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
