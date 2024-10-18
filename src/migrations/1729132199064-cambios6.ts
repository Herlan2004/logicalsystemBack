import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios61729132199064 implements MigrationInterface {
    name = 'Cambios61729132199064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_v" ADD "situacionCombateId" uuid`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD CONSTRAINT "FK_e5ed82030ac8b60dcb1429db821" FOREIGN KEY ("situacionCombateId") REFERENCES "situacion_combate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_v" DROP CONSTRAINT "FK_e5ed82030ac8b60dcb1429db821"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP COLUMN "situacionCombateId"`);
    }

}
