import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClaseIModule } from './clase_i/clase_i.module';
import { ClaseIiiModule } from './clase_iii/clase_iii.module';
import { ClaseVModule } from './clase_v/clase_v.module';
import { AguaModule } from './agua/agua.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ArmaModule } from './arma/arma.module';
import { SituacionCombateModule } from './situacion_combate/situacion_combate.module';
import { PlanillaModule } from './planilla/planilla.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),ClaseIModule, ClaseIiiModule, ClaseVModule, AguaModule, VehiculoModule, ArmaModule, SituacionCombateModule, PlanillaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
