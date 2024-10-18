import { BaseEntity } from "src/common/base.entity";
import { PlanillaEntity } from "src/planilla/entities/planilla.entity";
import { VehiculoEntity } from "src/vehiculo/entities/vehiculo.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity('clase_i')
export class ClaseIEntity extends BaseEntity{

    @Column({ name: 'num_efectivo', nullable: true  })
    numEfectivo: number;

    @Column({ name: 'cantidad_dias', nullable: true  })
    cantidadDias: number;

    @Column({ name: 'cantidad_raciones', nullable: true  })
    cantidadRaciones: number;

    @Column({ name: 'peso_racion', nullable: true  })
    pesoRacion: number;
    
    @Column({ name: 'cant_vehiculos', nullable: true  })
    cantVehiculos: number;

    @OneToOne(() => PlanillaEntity, (planilla) => planilla.claseI, {
      nullable: true,
      })
    planilla: PlanillaEntity;

    @ManyToOne(() => VehiculoEntity, (vehiculo) => vehiculo.clasesI, {
        nullable: true,
      })
    vehiculo: VehiculoEntity;


}
