import { Test, TestingModule } from '@nestjs/testing';
import { ClaseVController } from './clase_v.controller';
import { ClaseVService } from './clase_v.service';

describe('ClaseVController', () => {
  let controller: ClaseVController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClaseVController],
      providers: [ClaseVService],
    }).compile();

    controller = module.get<ClaseVController>(ClaseVController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
