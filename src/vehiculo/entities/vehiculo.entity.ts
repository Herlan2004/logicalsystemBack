
import { AguaEntity } from 'src/agua/entities/agua.entity';
import { ClaseIEntity } from 'src/clase_i/entities/clase_i.entity';
import { ClaseVEntity } from 'src/clase_v/entities/clase_v.entity';
import { BaseEntity } from 'src/common/base.entity';
//import { RelationClaseIVehiculoEntity } from 'src/common/entities/relation_clase_i_vehiculo.entity';
import { RelationClaseIiiVehiculoEntity } from 'src/common/entities/relation_clase_iii_vehiculo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('vehiculo')
export class VehiculoEntity extends BaseEntity {

    @Column({ name: 'nombre', length: 100, nullable: true  })
    nombre: string;

    @Column({ name: 'kop', nullable: true , type: 'float'  })
    kop: number;

    @Column({ name: 'tipo_combustible', length: 50 })
    tipoCombustible: string;

    @Column({ name: 'capacidad', nullable: true, type: 'float'   })
    capacidad: number;

    @Column({ name: 'cap_trasp_personal', nullable: true  })
    capTranspPersonal: number;

    @Column({ name: 'cap_carga', nullable: true, type: 'float'  })
    capCarga: number;

    @Column({ name: 'type_cap_carga', nullable: true })
    typeCapCarga: string;

    @OneToMany(() => ClaseVEntity, (claseV) => claseV.vehiculo)
    clasesV: ClaseVEntity[];

    @OneToMany(() => ClaseIEntity, (claseI) => claseI.vehiculo)
    clasesI: ClaseIEntity[];

    @OneToMany(() => AguaEntity, (agua) => agua.vehiculo)
    aguas: AguaEntity[];

    @OneToMany(() => RelationClaseIiiVehiculoEntity, (relation) => relation.vehiculo)
    claseIiiVehiculos: RelationClaseIiiVehiculoEntity[];
}