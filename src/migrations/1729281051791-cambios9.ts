import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios91729281051791 implements MigrationInterface {
    name = 'Cambios91729281051791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" DROP CONSTRAINT "FK_5d3b3d90526157916bb52bee33f"`);
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" DROP CONSTRAINT "FK_a117ef1172259ed37db10fb2214"`);
        await queryRunner.query(`CREATE TABLE "arma" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, CONSTRAINT "PK_24988c96722587722c1a56f235d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "agua" ADD "vehiculoId" uuid`);
        await queryRunner.query(`ALTER TABLE "agua" ADD CONSTRAINT "FK_d4e525f0525b91c792e3ffa1675" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" ADD CONSTRAINT "FK_5d3b3d90526157916bb52bee33f" FOREIGN KEY ("arma_id") REFERENCES "arma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" ADD CONSTRAINT "FK_a117ef1172259ed37db10fb2214" FOREIGN KEY ("arma_id") REFERENCES "arma"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" DROP CONSTRAINT "FK_a117ef1172259ed37db10fb2214"`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" DROP CONSTRAINT "FK_5d3b3d90526157916bb52bee33f"`);
        await queryRunner.query(`ALTER TABLE "agua" DROP CONSTRAINT "FK_d4e525f0525b91c792e3ffa1675"`);
        await queryRunner.query(`ALTER TABLE "agua" DROP COLUMN "vehiculoId"`);
        await queryRunner.query(`DROP TABLE "arma"`);
        await queryRunner.query(`ALTER TABLE "relation_clase_v_arma" ADD CONSTRAINT "FK_a117ef1172259ed37db10fb2214" FOREIGN KEY ("arma_id") REFERENCES "arma_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relation_arma_situacion_combate" ADD CONSTRAINT "FK_5d3b3d90526157916bb52bee33f" FOREIGN KEY ("arma_id") REFERENCES "arma_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
