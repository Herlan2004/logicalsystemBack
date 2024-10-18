import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios21728842262161 implements MigrationInterface {
    name = 'Cambios21728842262161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "situacion_combate" DROP COLUMN "primer_dia"`);
        await queryRunner.query(`ALTER TABLE "situacion_combate" DROP COLUMN "dias_siguientes"`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" ADD "primer_dia" integer`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" ADD "dias_siguientes" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" DROP COLUMN "dias_siguientes"`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" DROP COLUMN "primer_dia"`);
        await queryRunner.query(`ALTER TABLE "situacion_combate" ADD "dias_siguientes" integer`);
        await queryRunner.query(`ALTER TABLE "situacion_combate" ADD "primer_dia" integer`);
    }

}
