import { Entity,ManyToOne, JoinColumn, Column } from "typeorm";
import { BaseEntity } from "../base.entity";
import { ClaseIiiEntity } from "src/clase_iii/entities/clase_iii.entity";
import { VehiculoEntity } from "src/vehiculo/entities/vehiculo.entity";

@Entity('relation_clase_iii_vehiculo')
export class RelationClaseIiiVehiculoEntity extends BaseEntity {

    @Column({ name: 'cant_vehiculos', nullable: true  })
    cantVehiculos: number;

    
    @ManyToOne(() => ClaseIiiEntity, (claseIii) => claseIii.claseIiiVehiculos, { eager: true})
    @JoinColumn({ name: 'clase_iii_id' })
    claseIii: ClaseIiiEntity;

    @ManyToOne(() => VehiculoEntity, (vehiculo) => vehiculo.claseIiiVehiculos, { eager: true})
    @JoinColumn({ name: 'vehiculo_id' })
    vehiculo: VehiculoEntity;
}