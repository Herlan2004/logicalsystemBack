import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationArmaSituacionCombateEntity } from 'src/common/entities/relation_arma_situacion_combate.entity';
import { Repository } from 'typeorm';
import { ArmaEntity } from './entities/arma.entity';
import { SituacionCombateService } from 'src/situacion_combate/situacion_combate.service';

@Injectable()
export class ArmaService {

  constructor(
    @InjectRepository(ArmaEntity)
    private readonly armaRepository: Repository<ArmaEntity>,
    @InjectRepository(RelationArmaSituacionCombateEntity)
    private readonly relationArmaSituacionCombateRepository: Repository<RelationArmaSituacionCombateEntity>,
    @Inject(forwardRef(() => SituacionCombateService))
    private readonly situacionCombateService: SituacionCombateService,
  ) {}


  create(createArmaDto: CreateArmaDto) {
    return 'This action adds a new arma';
  }

  findAll() {
    return this.armaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} arma`;
  }

  update(id: number, updateArmaDto: UpdateArmaDto) {
    return `This action updates a #${id} arma`;
  }

  remove(id: number) {
    return `This action removes a #${id} arma`;
  }
}
