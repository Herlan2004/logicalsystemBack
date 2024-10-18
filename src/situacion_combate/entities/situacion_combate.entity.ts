import { ArmaEntity } from 'src/arma/entities/arma.entity';
import { ClaseVEntity } from 'src/clase_v/entities/clase_v.entity';
import { BaseEntity } from 'src/common/base.entity';
import { RelationArmaSituacionCombateEntity } from 'src/common/entities/relation_arma_situacion_combate.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';


@Entity('situacion_combate')
export class SituacionCombateEntity extends BaseEntity {
  @Column({ name: 'tipo', nullable: true  })
  tipo: string;

  @OneToMany(() => ClaseVEntity, (claseV) => claseV.situacionCombate)
  clasesV: ClaseVEntity[];
  
  @OneToMany(() => RelationArmaSituacionCombateEntity, (armaSituacionCombate) => armaSituacionCombate.situacionCombate)
  armaSituacionCombate: RelationArmaSituacionCombateEntity[];
}