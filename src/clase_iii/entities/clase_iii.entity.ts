import { BaseEntity } from "src/common/base.entity";
import { RelationClaseIiiVehiculoEntity } from "src/common/entities/relation_clase_iii_vehiculo.entity";
import { PlanillaEntity } from "src/planilla/entities/planilla.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
@Entity('clase_iii')
export class ClaseIiiEntity extends BaseEntity {

    @Column({ name: 'kop_total', nullable: true, type: 'float'   })
    kopTotal: number;

    @Column({ name: 'kop_grupo_1', nullable: true, type: 'float'  })
    kopGrupo1: number;

    @Column({ name: 'kop_grupo_2', nullable: true , type: 'float'  })
    kopGrupo2: number;

    @Column({ name: 'dist_carretera', nullable: true , type: 'float'  })
    distCarreteraComun: number;

    @Column({ name: 'dist_campo_traviesa', nullable: true, type: 'float'   })
    distCampoTraviesaComun: number;

    @Column({ name: 'dist_carretera_grupo_1', nullable: true, type: 'float'   })
    distCarreteraGrupo1: number;

    @Column({ name: 'dist_campo_traviesa_grupo_1', nullable: true, type: 'float'  })
    distCampoTraviesaGrupo1: number;

    @Column({ name: 'dist_carretera_grupo_2', nullable: true , type: 'float'  })
    distCarreteraGrupo2: number;

    @Column({ name: 'dist_campo_traviesa_grupo_2', nullable: true, type: 'float'   })
    distCampoTraviesaGrupo2: number;

    @Column({ name: 'dist_abastecimiento', nullable: true, type: 'float'   })
    distAbastecimiento: number;

    @Column({ name: 'factor_seguridad', nullable: true  })
    factorSeguridad: number;

    @Column({ name: 'fdm_total', nullable: true  })
    fdmTotal: number;

    @Column({ name: 'fmd_total', nullable: true  })
    fmdTotal: number;

    @Column({ name: 'fda_total', nullable: true  })
    fdaTotal: number;

    @Column({ name: 'combustible_total', nullable: true  })
    combustibleTotal: number;

    @Column({ name: 'lubricantes', nullable: true  })
    lubricantes: number;

    @OneToOne(() => PlanillaEntity, (planilla) => planilla.claseIii, {
      nullable: true,
      })
    planilla: PlanillaEntity;

    @OneToMany(() => RelationClaseIiiVehiculoEntity, (relation) => relation.claseIii)
    claseIiiVehiculos: RelationClaseIiiVehiculoEntity[];

}
