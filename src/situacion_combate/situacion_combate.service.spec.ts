import { Test, TestingModule } from '@nestjs/testing';
import { SituacionCombateService } from './situacion_combate.service';

describe('SituacionCombateService', () => {
  let service: SituacionCombateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SituacionCombateService],
    }).compile();

    service = module.get<SituacionCombateService>(SituacionCombateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
