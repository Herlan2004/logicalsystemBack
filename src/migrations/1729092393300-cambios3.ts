import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios31729092393300 implements MigrationInterface {
    name = 'Cambios31729092393300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "kop_grupo_1" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "kop_grupo_2" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "kop_total"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "kop_total" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera_grupo_1"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera_grupo_1" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa_grupo_1"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa_grupo_1" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera_grupo_2"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera_grupo_2" double precision`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa_grupo_2"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa_grupo_2" double precision`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa_grupo_2"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa_grupo_2" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera_grupo_2"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera_grupo_2" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa_grupo_1"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa_grupo_1" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera_grupo_1"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera_grupo_1" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "kop_total"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "kop_total" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "kop_grupo_2"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "kop_grupo_1"`);
    }

}
