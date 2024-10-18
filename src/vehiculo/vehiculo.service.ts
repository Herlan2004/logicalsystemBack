import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { VehiculoEntity } from './entities/vehiculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClaseIService } from 'src/clase_i/clase_i.service';
import { ClaseIEntity } from 'src/clase_i/entities/clase_i.entity';
import { ClaseVService } from 'src/clase_v/clase_v.service';

@Injectable()
export class VehiculoService {

  constructor(
    @InjectRepository(VehiculoEntity)
    private readonly vehiculoRepository: Repository<VehiculoEntity>,
    @Inject(forwardRef(() => ClaseIService))
    private readonly claseIService: ClaseIService,
    @Inject(forwardRef(() => ClaseVService))
    private readonly claseVService: ClaseVService,
   ) {}

  create(createVehiculoDto: CreateVehiculoDto) {
    return 'This action adds a new vehiculo';
  }

  findAll() {
    return this.vehiculoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiculo`;
  }

  update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return `This action updates a #${id} vehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiculo`;
  }
}
