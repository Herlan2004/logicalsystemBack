import { Test, TestingModule } from '@nestjs/testing';
import { ClaseIService } from './clase_i.service';

describe('ClaseIService', () => {
  let service: ClaseIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaseIService],
    }).compile();

    service = module.get<ClaseIService>(ClaseIService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
