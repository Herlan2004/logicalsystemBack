import { Test, TestingModule } from '@nestjs/testing';
import { ClaseIController } from './clase_i.controller';
import { ClaseIService } from './clase_i.service';

describe('ClaseIController', () => {
  let controller: ClaseIController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClaseIController],
      providers: [ClaseIService],
    }).compile();

    controller = module.get<ClaseIController>(ClaseIController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
