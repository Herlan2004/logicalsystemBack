import { Test, TestingModule } from '@nestjs/testing';
import { AguaService } from './agua.service';

describe('AguaService', () => {
  let service: AguaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AguaService],
    }).compile();

    service = module.get<AguaService>(AguaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
