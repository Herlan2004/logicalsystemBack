import { forwardRef, Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoEntity } from './entities/vehiculo.entity';
import { ClaseIiiModule } from 'src/clase_iii/clase_iii.module';
import { ClaseIEntity } from 'src/clase_i/entities/clase_i.entity';
import { ClaseIModule } from 'src/clase_i/clase_i.module';
import { ClaseVModule } from 'src/clase_v/clase_v.module';

@Module({
  imports: [TypeOrmModule.forFeature([VehiculoEntity]),
  forwardRef(() => ClaseIModule),
  forwardRef(() => ClaseVModule),
  ],
  controllers: [VehiculoController],
  providers: [VehiculoService],
  exports: [VehiculoService]
})
export class VehiculoModule {}
