/*import { Entity,ManyToOne, JoinColumn, Column } from "typeorm";
import { BaseEntity } from "../base.entity";
import { ClaseIEntity } from "src/clase_i/entities/clase_i.entity";
import { VehiculoEntity } from "src/vehiculo/entities/vehiculo.entity";

@Entity('relation_clase_i_vehiculo')
export class RelationClaseIVehiculoEntity extends BaseEntity {

    @Column({ name: 'cant_vehiculos', nullable: true  })
    cantVehiculos: number;
    
    @ManyToOne(() => ClaseIEntity, (claseI) => claseI.claseIVehiculos, { eager: true })
    @JoinColumn({ name: 'clase_i_id' })
    claseI: ClaseIEntity;

    @ManyToOne(() => VehiculoEntity, (vehiculo) => vehiculo.claseIVehiculos, { eager: true })
    @JoinColumn({ name: 'vehiculo_id' })
    vehiculo: VehiculoEntity;
}*/