import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateSituacionCombateDto } from './dto/create-situacion_combate.dto';
import { UpdateSituacionCombateDto } from './dto/update-situacion_combate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SituacionCombateEntity } from './entities/situacion_combate.entity';
import { RelationArmaSituacionCombateEntity } from 'src/common/entities/relation_arma_situacion_combate.entity';
import { ArmaService } from 'src/arma/arma.service';

@Injectable()
export class SituacionCombateService {

  constructor(
    @InjectRepository(SituacionCombateEntity)
    private readonly situacionCombateRepository: Repository<SituacionCombateEntity>,
    @Inject(forwardRef(() => ArmaService))
    private readonly armaService: ArmaService,
  ) {}

  create(createSituacionCombateDto: CreateSituacionCombateDto) {
    return 'This action adds a new situacionCombate';
  }

  findAll() {
    return this.situacionCombateRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} situacionCombate`;
  }

  update(id: number, updateSituacionCombateDto: UpdateSituacionCombateDto) {
    return `This action updates a #${id} situacionCombate`;
  }

  remove(id: number) {
    return `This action removes a #${id} situacionCombate`;
  }
}
