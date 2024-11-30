import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations91729289590721 implements MigrationInterface {
    name = 'Migrations91729289590721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agua" ADD "cant_vehiculos" integer`);
        await queryRunner.query(`ALTER TABLE "agua" ADD "vehiculoId" uuid`);
        await queryRunner.query(`ALTER TABLE "agua" ADD CONSTRAINT "FK_d4e525f0525b91c792e3ffa1675" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agua" DROP CONSTRAINT "FK_d4e525f0525b91c792e3ffa1675"`);
        await queryRunner.query(`ALTER TABLE "agua" DROP COLUMN "vehiculoId"`);
        await queryRunner.query(`ALTER TABLE "agua" DROP COLUMN "cant_vehiculos"`);
    }

}
