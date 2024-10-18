import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios101729286499205 implements MigrationInterface {
    name = 'Cambios101729286499205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agua" ADD "cant_vehiculos" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agua" DROP COLUMN "cant_vehiculos"`);
    }

}
