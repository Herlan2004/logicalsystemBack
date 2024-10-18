import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios1728789830111 implements MigrationInterface {
    name = 'Cambios1728789830111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "type_cap_carga"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "type_cap_carga" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "type_cap_carga"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "type_cap_carga" integer`);
    }

}
