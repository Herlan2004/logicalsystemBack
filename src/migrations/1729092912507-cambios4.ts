import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios41729092912507 implements MigrationInterface {
    name = 'Cambios41729092912507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agua" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "agua" ADD CONSTRAINT "UQ_709a114cce1032cebe6e01b816c" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_abastecimiento"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_abastecimiento" double precision`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "kop"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "kop" double precision`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "capacidad"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "capacidad" double precision`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "cap_carga"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "cap_carga" double precision`);
        await queryRunner.query(`ALTER TABLE "agua" ADD CONSTRAINT "FK_709a114cce1032cebe6e01b816c" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agua" DROP CONSTRAINT "FK_709a114cce1032cebe6e01b816c"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "cap_carga"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "cap_carga" integer`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "capacidad"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "capacidad" integer`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "kop"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "kop" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_abastecimiento"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_abastecimiento" integer`);
        await queryRunner.query(`ALTER TABLE "agua" DROP CONSTRAINT "UQ_709a114cce1032cebe6e01b816c"`);
        await queryRunner.query(`ALTER TABLE "agua" DROP COLUMN "planilla_id"`);
    }

}
