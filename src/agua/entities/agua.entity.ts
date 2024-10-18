import { BaseEntity } from "src/common/base.entity";
import { PlanillaEntity } from "src/planilla/entities/planilla.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
@Entity('agua')
export class AguaEntity extends BaseEntity {
  
  @Column({ name: 'num_efectivo', nullable: true  })
  numEfectivo: number;

  @Column({ name: 'dias_con_ducha', nullable: true  })
  diasConDucha: number;

  @Column({ name: 'dias_sin_ducha', nullable: true  })
  diasSinDucha: number;

  @Column({ name: 'consumo_total', nullable: true  })
  consumoTotal: number;

  @OneToOne(() => PlanillaEntity, (planilla) => planilla.agua, {
    nullable: true,
  })
  planilla: PlanillaEntity;

}
