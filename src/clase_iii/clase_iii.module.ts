import { VehiculoEntity } from 'src/vehiculo/entities/vehiculo.entity';
import { forwardRef, Module } from '@nestjs/common';
import { ClaseIiiService } from './clase_iii.service';
import { ClaseIiiController } from './clase_iii.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanillaModule } from 'src/planilla/planilla.module';
import { ClaseIiiEntity } from './entities/clase_iii.entity';
import { RelationClaseIiiVehiculoEntity } from 'src/common/entities/relation_clase_iii_vehiculo.entity';
import { VehiculoModule } from 'src/vehiculo/vehiculo.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClaseIiiEntity,RelationClaseIiiVehiculoEntity, VehiculoEntity]), 
  forwardRef(() => PlanillaModule),
  forwardRef(() => VehiculoModule),],
  controllers: [ClaseIiiController],
  providers: [ClaseIiiService],
  exports: [ClaseIiiService]
})
export class ClaseIiiModule {}
