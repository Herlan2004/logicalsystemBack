import { Test, TestingModule } from '@nestjs/testing';
import { ClaseIiiController } from './clase_iii.controller';
import { ClaseIiiService } from './clase_iii.service';

describe('ClaseIiiController', () => {
  let controller: ClaseIiiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClaseIiiController],
      providers: [ClaseIiiService],
    }).compile();

    controller = module.get<ClaseIiiController>(ClaseIiiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
