import { Test, TestingModule } from '@nestjs/testing';
import { ArmaService } from './arma.service';

describe('ArmaService', () => {
  let service: ArmaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArmaService],
    }).compile();

    service = module.get<ArmaService>(ArmaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
