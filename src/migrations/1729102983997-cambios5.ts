import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios51729102983997 implements MigrationInterface {
    name = 'Cambios51729102983997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "relation_clase_iii_vehiculo" ADD "cant_vehiculos" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "relation_clase_iii_vehiculo" DROP COLUMN "cant_vehiculos"`);
    }

}
