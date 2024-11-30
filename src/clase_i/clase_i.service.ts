import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClaseIDto } from './dto/create-clase_i.dto';
import { UpdateClaseIDto } from './dto/update-clase_i.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanillaService } from 'src/planilla/planilla.service';
import { VehiculoService } from 'src/vehiculo/vehiculo.service';
import { Repository } from 'typeorm';
import { ClaseIEntity } from './entities/clase_i.entity';

@Injectable()
export class ClaseIService {

  constructor(
    @InjectRepository(ClaseIEntity)
    private readonly claseIRepository: Repository<ClaseIEntity>,
    @Inject(forwardRef(() => PlanillaService))
    private readonly planillaService: PlanillaService,
    @Inject(forwardRef(() => VehiculoService))
    private readonly vehiculoService: VehiculoService,
  ) {}


  async create(createClaseIDto: any) {
    const { vehiculos, ...claseIData } = createClaseIDto;

    // Crear la entidad de Clase III con los datos del DTO
    let newClaseI = new ClaseIEntity();
    newClaseI = claseIData
    return await this.claseIRepository.save(newClaseI);
  }

  findAll() {
    return `This action returns all claseI`;
  }

  findOne(id: number) {
    return `This action returns a #${id} claseI`;
  }

  async update(id: number, updateClaseIDto: any) {
    const existingClaseI = await this.claseIRepository.findOne({ where: { id } });
    if (!existingClaseI) {
      throw new NotFoundException(`Clase I entity with ID ${id} not found`);
    }
  
    // Actualizar los datos de la entidad
    Object.assign(existingClaseI, updateClaseIDto);
  
    // Guardar los cambios
    return await this.claseIRepository.save(existingClaseI);
  }

  remove(id: number) {
    return `This action removes a #${id} claseI`;
  }
}
