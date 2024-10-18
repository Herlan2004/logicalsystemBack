import { forwardRef, Module } from '@nestjs/common';
import { SituacionCombateService } from './situacion_combate.service';
import { SituacionCombateController } from './situacion_combate.controller';
import { RelationArmaSituacionCombateEntity } from 'src/common/entities/relation_arma_situacion_combate.entity';
import { SituacionCombateEntity } from './entities/situacion_combate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArmaModule } from 'src/arma/arma.module';

@Module({
  imports: [TypeOrmModule.forFeature([SituacionCombateEntity]),
  forwardRef(() => ArmaModule)],
  controllers: [SituacionCombateController],
  providers: [SituacionCombateService],
  exports: [SituacionCombateService]
})
export class SituacionCombateModule {}
