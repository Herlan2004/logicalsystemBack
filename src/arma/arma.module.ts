import { forwardRef, Module } from '@nestjs/common';
import { ArmaService } from './arma.service';
import { ArmaController } from './arma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArmaEntity } from './entities/arma.entity';
import { RelationArmaSituacionCombateEntity } from 'src/common/entities/relation_arma_situacion_combate.entity';
import { SituacionCombateModule } from 'src/situacion_combate/situacion_combate.module';

@Module({
  imports: [TypeOrmModule.forFeature([ArmaEntity, RelationArmaSituacionCombateEntity]),
  forwardRef(() => SituacionCombateModule),],
  controllers: [ArmaController],
  providers: [ArmaService],
  exports: [ArmaService]
})
export class ArmaModule {}
