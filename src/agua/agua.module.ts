import { forwardRef, Module } from '@nestjs/common';
import { AguaService } from './agua.service';
import { AguaController } from './agua.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AguaEntity } from './entities/agua.entity';
import { PlanillaModule } from 'src/planilla/planilla.module';

@Module({
  imports: [TypeOrmModule.forFeature([AguaEntity]), 
  forwardRef(() => PlanillaModule),],
  controllers: [AguaController],
  providers: [AguaService],
  exports: [AguaService]
})
export class AguaModule {}
