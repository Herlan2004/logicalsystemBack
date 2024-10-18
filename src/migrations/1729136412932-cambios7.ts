import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios71729136412932 implements MigrationInterface {
    name = 'Cambios71729136412932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_v" ADD "cant_dias" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clase_v" DROP COLUMN "cant_dias"`);
    }

}
