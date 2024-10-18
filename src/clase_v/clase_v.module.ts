import { ArmaModule } from './../arma/arma.module';
import { forwardRef, Module } from '@nestjs/common';
import { ClaseVService } from './clase_v.service';
import { ClaseVController } from './clase_v.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaseIiiEntity } from 'src/clase_iii/entities/clase_iii.entity';
import { PlanillaModule } from 'src/planilla/planilla.module';
import { VehiculoModule } from 'src/vehiculo/vehiculo.module';
import { ClaseVEntity } from './entities/clase_v.entity';
import { RelationArmaSituacionCombateEntity } from 'src/common/entities/relation_arma_situacion_combate.entity';
import { RelationClaseVArmaEntity } from 'src/common/entities/relation_clase_v_arma.entity';
import { ArmaEntity } from 'src/arma/entities/arma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClaseVEntity, ArmaEntity, RelationArmaSituacionCombateEntity, RelationClaseVArmaEntity]), 
  forwardRef(() => PlanillaModule),
  forwardRef(() => VehiculoModule),
  forwardRef(() => ArmaModule),
  ],
  controllers: [ClaseVController],
  providers: [ClaseVService],
  exports: [ClaseVService]
})
export class ClaseVModule {}
