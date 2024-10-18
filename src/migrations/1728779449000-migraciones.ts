import { MigrationInterface, QueryRunner } from "typeorm";

export class Migraciones1728779449000 implements MigrationInterface {
    name = 'Migraciones1728779449000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "agua" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "num_efectivo" integer, "dias_con_ducha" integer, "dias_sin_ducha" integer, "consumo_total" integer, CONSTRAINT "PK_0572a0e1c96bab694e1431d3591" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "relation_clase_iii_vehiculo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clase_iii_id" uuid, "vehiculo_id" uuid, CONSTRAINT "PK_0b13e3ea422942c4066515e41c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clase_iii" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "kop_total" integer, "dist_carretera" integer, "dist_campo_traviesa" integer, "factor_seguridad" integer, "fdm_total" integer, "fmd_total" integer, "fda_total" integer, "combustible_total" integer, "lubricantes" integer, CONSTRAINT "PK_0127a9ef5ef3697257fcc50ba6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "situacion_combate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tipo" character varying, "primer_dia" integer, "dias_siguientes" integer, CONSTRAINT "PK_852dcc212ff0ca943bf1219551a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "relation_arma_situacion_combate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "arma_id" uuid, "situacion_combate_id" uuid, CONSTRAINT "PK_63fe85063f98fb6c8247f2abd15" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arma_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, CONSTRAINT "PK_23b803759362b121c1fa091ad02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "relation_clase_v_arma" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "cant_armamento" integer, "cant_municion_necesaria" integer, "cant_municion_por_caja" integer, "peso_caja" integer, "peso_municion" integer, "clase_v_id" uuid, "arma_id" uuid, CONSTRAINT "PK_64cba1a7240ca380882d661c1e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clase_v" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "cant_vehiculos" integer, "vehiculoId" uuid, CONSTRAINT "PK_65cdcb2cf0f8a5bce5b93b14d2d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "planilla" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ea06690a3b0154bfb04379c5d07" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clase_i" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "num_efectivo" integer, "cantidad_dias" integer, "cantidad_raciones" integer, "peso_racion" integer, "cant_vehiculos" integer, "vehiculoId" uuid, CONSTRAINT "PK_e788a67b6ac42c239acc932c387" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehiculo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying(100), "kop" integer, "tipo_combustible" character varying(50) NOT NULL, "capacidad" integer, "cap_trasp_personal" integer, "cap_carga" integer, "type_cap_carga" integer, CONSTRAINT "PK_79ad0f38366031fd4f2c1efdc62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "relation_clase_iii_vehiculo" ADD CONSTRAINT "FK_945f6cd521f3e8791fbc75ca73e" FOREIGN KEY ("clase_iii_id") REFERENCES "clase_iii"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_clase_iii_vehiculo" ADD CONSTRAINT "FK_976cada9a2267214c1cb9e7b360" FOREIGN KEY ("vehiculo_id") REFERENCES "vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" ADD CONSTRAINT "FK_5d3b3d90526157916bb52bee33f" FOREIGN KEY ("arma_id") REFERENCES "arma_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" ADD CONSTRAINT "FK_53892968af45e541f847889b6ab" FOREIGN KEY ("situacion_combate_id") REFERENCES "situacion_combate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" ADD CONSTRAINT "FK_c8111a8ea36bd4ebf3937e4523c" FOREIGN KEY ("clase_v_id") REFERENCES "clase_v"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" ADD CONSTRAINT "FK_a117ef1172259ed37db10fb2214" FOREIGN KEY ("arma_id") REFERENCES "arma_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD CONSTRAINT "FK_bc3ea3b87cf5754c799e0e645d7" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase_i" ADD CONSTRAINT "FK_203a3ee67f030dadcd3f9365c73" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_i" DROP CONSTRAINT "FK_203a3ee67f030dadcd3f9365c73"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP CONSTRAINT "FK_bc3ea3b87cf5754c799e0e645d7"`);
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" DROP CONSTRAINT "FK_a117ef1172259ed37db10fb2214"`);
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" DROP CONSTRAINT "FK_c8111a8ea36bd4ebf3937e4523c"`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" DROP CONSTRAINT "FK_53892968af45e541f847889b6ab"`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" DROP CONSTRAINT "FK_5d3b3d90526157916bb52bee33f"`);
        await queryRunner.query(`ALTER TABLE "relation_clase_iii_vehiculo" DROP CONSTRAINT "FK_976cada9a2267214c1cb9e7b360"`);
        await queryRunner.query(`ALTER TABLE "relation_clase_iii_vehiculo" DROP CONSTRAINT "FK_945f6cd521f3e8791fbc75ca73e"`);
        await queryRunner.query(`DROP TABLE "vehiculo"`);
        await queryRunner.query(`DROP TABLE "clase_i"`);
        await queryRunner.query(`DROP TABLE "planilla"`);
        await queryRunner.query(`DROP TABLE "clase_v"`);
        await queryRunner.query(`DROP TABLE "relation_clase_v_arma"`);
        await queryRunner.query(`DROP TABLE "arma_entity"`);
        await queryRunner.query(`DROP TABLE "relation_arma_situacion_combate"`);
        await queryRunner.query(`DROP TABLE "situacion_combate"`);
        await queryRunner.query(`DROP TABLE "clase_iii"`);
        await queryRunner.query(`DROP TABLE "relation_clase_iii_vehiculo"`);
        await queryRunner.query(`DROP TABLE "agua"`);
    }

}
