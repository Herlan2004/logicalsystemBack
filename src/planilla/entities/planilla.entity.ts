import { AguaEntity } from "src/agua/entities/agua.entity";
import { ClaseIEntity } from "src/clase_i/entities/clase_i.entity";
import { ClaseIiiEntity } from "src/clase_iii/entities/clase_iii.entity";
import { ClaseVEntity } from "src/clase_v/entities/clase_v.entity";
import { BaseEntity } from "src/common/base.entity";
import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity('planilla')
export class PlanillaEntity extends BaseEntity{
    @OneToOne(() => AguaEntity, (agua) => agua.planilla, { eager: true })
    @JoinColumn({ name: 'agua_id' })
    agua: AguaEntity;

    @OneToOne(() => ClaseIEntity, (claseI) => claseI.planilla, { eager: true })
    @JoinColumn({ name: 'clase_i_id' })
    claseI: ClaseIEntity;

    @OneToOne(() => ClaseIiiEntity, (claseIii) => claseIii.planilla, { eager: true })
    @JoinColumn({ name: 'clase_iii_id' })
    claseIii: ClaseIiiEntity;

    @OneToOne(() => ClaseVEntity, (claseV) => claseV.planilla, { eager: true })
    @JoinColumn({ name: 'clase_v_id' })
    claseV: ClaseVEntity;
}
