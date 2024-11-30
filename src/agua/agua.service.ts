import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAguaDto } from './dto/create-agua.dto';
import { UpdateAguaDto } from './dto/update-agua.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AguaEntity } from './entities/agua.entity';
import { PlanillaService } from 'src/planilla/planilla.service';

@Injectable()
export class AguaService {

  constructor(
    @InjectRepository(AguaEntity)
    private readonly aguaRepository: Repository<AguaEntity>,
    @Inject(forwardRef(() => PlanillaService))
    private readonly planillaService: PlanillaService,
  ) {}


  async create(aguaDto: any) {
    const { vehiculos, ...aguaData } = aguaDto;
    console.log(aguaData)

    // Crear la entidad de Clase III con los datos del DTO
    let newAgua = new AguaEntity();
    newAgua = aguaData

    // Asignar la clase III a la planilla

    // Guardar la Clase III
    return await this.aguaRepository.save(newAgua);

    // Asociar los vehículos a la clase III
  }

  findAll() {
    return `This action returns all agua`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agua`;
  }

  async update(id: number, updateAguaDto: any) {
    const existingAgua = await this.aguaRepository.findOne({ where: { id } });
    if (!existingAgua) {
      throw new NotFoundException(`Agua entity with ID ${id} not found`);
    }
  
    // Actualizar los datos de la entidad
    Object.assign(existingAgua, updateAguaDto);
  
    // Guardar los cambios
    return await this.aguaRepository.save(existingAgua);
  }

  remove(id: number) {
    return `This action removes a #${id} agua`;
  }
}
