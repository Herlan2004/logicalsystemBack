import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios21729091810684 implements MigrationInterface {
    name = 'Cambios21729091810684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera_grupo_1" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa_grupo_1" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_carretera_grupo_2" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_campo_traviesa_grupo_2" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "dist_abastecimiento" integer`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD CONSTRAINT "UQ_730b37944b4084747a7d2fb2fef" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD CONSTRAINT "UQ_3a28f5a9651971a598c75cf6944" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "clase_i" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "clase_i" ADD CONSTRAINT "UQ_1c090c967fb95a0fe7f88e93526" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD CONSTRAINT "FK_730b37944b4084747a7d2fb2fef" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD CONSTRAINT "FK_3a28f5a9651971a598c75cf6944" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase_i" ADD CONSTRAINT "FK_1c090c967fb95a0fe7f88e93526" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_i" DROP CONSTRAINT "FK_1c090c967fb95a0fe7f88e93526"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP CONSTRAINT "FK_3a28f5a9651971a598c75cf6944"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP CONSTRAINT "FK_730b37944b4084747a7d2fb2fef"`);
        await queryRunner.query(`ALTER TABLE "clase_i" DROP CONSTRAINT "UQ_1c090c967fb95a0fe7f88e93526"`);
        await queryRunner.query(`ALTER TABLE "clase_i" DROP COLUMN "planilla_id"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP CONSTRAINT "UQ_3a28f5a9651971a598c75cf6944"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP COLUMN "planilla_id"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP CONSTRAINT "UQ_730b37944b4084747a7d2fb2fef"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "planilla_id"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_abastecimiento"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa_grupo_2"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera_grupo_2"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_campo_traviesa_grupo_1"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "dist_carretera_grupo_1"`);
    }

}
