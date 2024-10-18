import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoController } from './vehiculo.controller';
import { VehiculoService } from './vehiculo.service';

describe('VehiculoController', () => {
  let controller: VehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiculoController],
      providers: [VehiculoService],
    }).compile();

    controller = module.get<VehiculoController>(VehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
