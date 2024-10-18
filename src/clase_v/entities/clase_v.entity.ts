import { VehiculoEntity } from 'src/vehiculo/entities/vehiculo.entity';

import { BaseEntity } from "src/common/base.entity";
import { RelationClaseVArmaEntity } from "src/common/entities/relation_clase_v_arma.entity";
import { PlanillaEntity } from "src/planilla/entities/planilla.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { SituacionCombateEntity } from 'src/situacion_combate/entities/situacion_combate.entity';
@Entity('clase_v')
export class ClaseVEntity extends BaseEntity{
    @Column({ name: 'cant_vehiculos', nullable: true  })
    cantVehiculos: number;

    @Column({ name: 'cant_dias', nullable: true  })
    cantDias: number;

    @OneToOne(() => PlanillaEntity, (planilla) => planilla.claseV, {
      nullable: true,
      })
    planilla: PlanillaEntity;

    @ManyToOne(() => VehiculoEntity, (vehiculo) => vehiculo.clasesV)
    vehiculo: VehiculoEntity;

    @ManyToOne(() => SituacionCombateEntity, (situacionCombate) => situacionCombate.clasesV)
    situacionCombate: SituacionCombateEntity;

    @OneToMany(() => RelationClaseVArmaEntity, (relation) => relation.claseV)
    claseVArmas: RelationClaseVArmaEntity[];

}
