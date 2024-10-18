import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambios81729141257729 implements MigrationInterface {
    name = 'Cambios81729141257729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agua" DROP CONSTRAINT "FK_709a114cce1032cebe6e01b816c"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP CONSTRAINT "FK_730b37944b4084747a7d2fb2fef"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP CONSTRAINT "FK_3a28f5a9651971a598c75cf6944"`);
        await queryRunner.query(`ALTER TABLE "clase_i" DROP CONSTRAINT "FK_1c090c967fb95a0fe7f88e93526"`);
        await queryRunner.query(`ALTER TABLE "agua" DROP CONSTRAINT "UQ_709a114cce1032cebe6e01b816c"`);
        await queryRunner.query(`ALTER TABLE "agua" DROP COLUMN "planilla_id"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP CONSTRAINT "UQ_730b37944b4084747a7d2fb2fef"`);
        await queryRunner.query(`ALTER TABLE "clase_iii" DROP COLUMN "planilla_id"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP CONSTRAINT "UQ_3a28f5a9651971a598c75cf6944"`);
        await queryRunner.query(`ALTER TABLE "clase_v" DROP COLUMN "planilla_id"`);
        await queryRunner.query(`ALTER TABLE "clase_i" DROP CONSTRAINT "UQ_1c090c967fb95a0fe7f88e93526"`);
        await queryRunner.query(`ALTER TABLE "clase_i" DROP COLUMN "planilla_id"`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD "agua_id" uuid`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "UQ_2fd8ccfd500b292818417685736" UNIQUE ("agua_id")`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD "clase_i_id" uuid`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "UQ_e81297d38d13a2c80f09886328d" UNIQUE ("clase_i_id")`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD "clase_iii_id" uuid`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "UQ_80d943c588aee0f8826c4470400" UNIQUE ("clase_iii_id")`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD "clase_v_id" uuid`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "UQ_58704013eddabbf706d285a3c36" UNIQUE ("clase_v_id")`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "FK_2fd8ccfd500b292818417685736" FOREIGN KEY ("agua_id") REFERENCES "agua"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "FK_e81297d38d13a2c80f09886328d" FOREIGN KEY ("clase_i_id") REFERENCES "clase_i"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "FK_80d943c588aee0f8826c4470400" FOREIGN KEY ("clase_iii_id") REFERENCES "clase_iii"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "planilla" ADD CONSTRAINT "FK_58704013eddabbf706d285a3c36" FOREIGN KEY ("clase_v_id") REFERENCES "clase_v"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "FK_58704013eddabbf706d285a3c36"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "FK_80d943c588aee0f8826c4470400"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "FK_e81297d38d13a2c80f09886328d"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "FK_2fd8ccfd500b292818417685736"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "UQ_58704013eddabbf706d285a3c36"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP COLUMN "clase_v_id"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "UQ_80d943c588aee0f8826c4470400"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP COLUMN "clase_iii_id"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "UQ_e81297d38d13a2c80f09886328d"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP COLUMN "clase_i_id"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP CONSTRAINT "UQ_2fd8ccfd500b292818417685736"`);
        await queryRunner.query(`ALTER TABLE "planilla" DROP COLUMN "agua_id"`);
        await queryRunner.query(`ALTER TABLE "clase_i" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "clase_i" ADD CONSTRAINT "UQ_1c090c967fb95a0fe7f88e93526" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD CONSTRAINT "UQ_3a28f5a9651971a598c75cf6944" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD CONSTRAINT "UQ_730b37944b4084747a7d2fb2fef" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "agua" ADD "planilla_id" uuid`);
        await queryRunner.query(`ALTER TABLE "agua" ADD CONSTRAINT "UQ_709a114cce1032cebe6e01b816c" UNIQUE ("planilla_id")`);
        await queryRunner.query(`ALTER TABLE "clase_i" ADD CONSTRAINT "FK_1c090c967fb95a0fe7f88e93526" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase_v" ADD CONSTRAINT "FK_3a28f5a9651971a598c75cf6944" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clase_iii" ADD CONSTRAINT "FK_730b37944b4084747a7d2fb2fef" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agua" ADD CONSTRAINT "FK_709a114cce1032cebe6e01b816c" FOREIGN KEY ("planilla_id") REFERENCES "planilla"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
