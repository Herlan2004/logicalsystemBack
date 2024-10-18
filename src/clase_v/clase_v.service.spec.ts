import { Test, TestingModule } from '@nestjs/testing';
import { ClaseVService } from './clase_v.service';

describe('ClaseVService', () => {
  let service: ClaseVService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaseVService],
    }).compile();

    service = module.get<ClaseVService>(ClaseVService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
