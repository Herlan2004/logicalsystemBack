import { Entity,ManyToOne, JoinColumn, Column } from "typeorm";
import { BaseEntity } from "../base.entity";
import { ArmaEntity } from "src/arma/entities/arma.entity";
import { SituacionCombateEntity } from "src/situacion_combate/entities/situacion_combate.entity";

@Entity('relation_arma_situacion_combate')
export class RelationArmaSituacionCombateEntity extends BaseEntity {
    
    @Column({ name: 'primer_dia', nullable: true  })
    primerDia: number;

    @Column({ name: 'dias_siguientes', nullable: true  })
    diasSiguientes: number; 

    @ManyToOne(() => ArmaEntity, (arma) => arma.armaSituacionCombate, { eager: true})
    @JoinColumn({ name: 'arma_id' })
    arma: ArmaEntity;

    @ManyToOne(() => SituacionCombateEntity, (situacionCombate) => situacionCombate.armaSituacionCombate, { eager: true})
    @JoinColumn({ name: 'situacion_combate_id' })
    situacionCombate: SituacionCombateEntity;
}