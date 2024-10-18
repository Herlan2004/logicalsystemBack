import { RelationArmaSituacionCombateEntity } from './../../common/entities/relation_arma_situacion_combate.entity';
import { BaseEntity } from 'src/common/base.entity';
import { SituacionCombateEntity } from './../../situacion_combate/entities/situacion_combate.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RelationClaseVArmaEntity } from 'src/common/entities/relation_clase_v_arma.entity';
@Entity('arma')
export class ArmaEntity extends BaseEntity {

  @Column()
  nombre: string;

  @OneToMany(() => RelationArmaSituacionCombateEntity, (armaSituacionCombate) => armaSituacionCombate.arma)
  armaSituacionCombate: RelationArmaSituacionCombateEntity[];

  @OneToMany(() => RelationClaseVArmaEntity, (relation) => relation.arma)
  claseVArmas: RelationClaseVArmaEntity[];
}
