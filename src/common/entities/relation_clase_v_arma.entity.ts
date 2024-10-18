import { Entity,ManyToOne, JoinColumn, Column } from "typeorm";
import { BaseEntity } from "../base.entity";
import { ClaseVEntity } from "src/clase_v/entities/clase_v.entity";
import { ArmaEntity } from "src/arma/entities/arma.entity";

@Entity('relation_clase_v_arma')
export class RelationClaseVArmaEntity extends BaseEntity {
    @Column({ name: 'cant_armamento', nullable: true  })
    cantArmamento: number;

    @Column({ name: 'cant_municion_necesaria', nullable: true  })
    cantMunicionNecesaria: number;

    @Column({ name: 'cant_municion_por_caja', nullable: true  })
    cantMunicionPorCaja: number;
    
    @Column({ name: 'peso_caja', nullable: true  })
    pesoCaja: number;

    @Column({ name: 'peso_municion', nullable: true  })
    pesoMunicion: number;

    @ManyToOne(() => ClaseVEntity, (claseV) => claseV.claseVArmas, { eager: true })
    @JoinColumn({ name: 'clase_v_id' })
    claseV: ClaseVEntity;

    @ManyToOne(() => ArmaEntity, (arma) => arma.claseVArmas, { eager: true })
    @JoinColumn({ name: 'arma_id' })
    arma: ArmaEntity;
}