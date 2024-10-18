import { forwardRef, Module } from '@nestjs/common';
import { ClaseIService } from './clase_i.service';
import { ClaseIController } from './clase_i.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanillaModule } from 'src/planilla/planilla.module';
import { ClaseIEntity } from './entities/clase_i.entity';
import { VehiculoModule } from 'src/vehiculo/vehiculo.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClaseIEntity]), 
  forwardRef(() => PlanillaModule),
  forwardRef(() => VehiculoModule),],
  controllers: [ClaseIController],
  providers: [ClaseIService],
  exports: [ClaseIService]
})
export class ClaseIModule {}
