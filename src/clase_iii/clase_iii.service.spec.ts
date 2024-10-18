import { Test, TestingModule } from '@nestjs/testing';
import { ClaseIiiService } from './clase_iii.service';

describe('ClaseIiiService', () => {
  let service: ClaseIiiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaseIiiService],
    }).compile();

    service = module.get<ClaseIiiService>(ClaseIiiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
