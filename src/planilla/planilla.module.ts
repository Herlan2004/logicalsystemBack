import { PlanillaEntity } from 'src/planilla/entities/planilla.entity';
import { forwardRef, Module } from '@nestjs/common';
import { PlanillaService } from './planilla.service';
import { PlanillaController } from './planilla.controller';
import { ClaseIModule } from 'src/clase_i/clase_i.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AguaModule } from 'src/agua/agua.module';
import { ClaseIiiModule } from 'src/clase_iii/clase_iii.module';
import { ClaseVModule } from 'src/clase_v/clase_v.module';

@Module({
  imports: [TypeOrmModule.forFeature([PlanillaEntity]), 
  forwardRef(() => AguaModule), 
  forwardRef(() => ClaseIModule), 
  forwardRef(() => ClaseIiiModule), 
  forwardRef(() => ClaseVModule)],
  controllers: [PlanillaController],
  providers: [PlanillaService],
  exports: [PlanillaService]
})
export class PlanillaModule {}
