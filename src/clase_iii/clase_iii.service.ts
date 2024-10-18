import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateClaseIiiDto } from './dto/create-clase_iii.dto';
import { UpdateClaseIiiDto } from './dto/update-clase_iii.dto';
import { RelationClaseIiiVehiculoEntity } from 'src/common/entities/relation_clase_iii_vehiculo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClaseVEntity } from 'src/clase_v/entities/clase_v.entity';
import { PlanillaService } from 'src/planilla/planilla.service';
import { Repository } from 'typeorm';
import { ClaseIiiEntity } from './entities/clase_iii.entity';
import { VehiculoEntity } from 'src/vehiculo/entities/vehiculo.entity';

@Injectable()
export class ClaseIiiService {

  constructor(
    @InjectRepository(ClaseIiiEntity)
    private readonly claseIiiRepository: Repository<ClaseIiiEntity>,
    @Inject(forwardRef(() => PlanillaService))
    private readonly planillaService: PlanillaService,
    @InjectRepository(RelationClaseIiiVehiculoEntity)
    private readonly relationClaseIiiVehiculoRepository: Repository<RelationClaseIiiVehiculoEntity>,
    @InjectRepository(VehiculoEntity)
    private readonly vehiculoRepository: Repository<VehiculoEntity>,
  ) {}

  async create(claseIiiDto: any) {
    const { vehiculos, ...claseIiiData } = claseIiiDto;
    console.log("data",claseIiiData)

    // Crear la entidad de Clase III con los datos del DTO
    let newClaseIii = new ClaseIiiEntity();
    newClaseIii = claseIiiData
    console.log(newClaseIii)
    const claseIiiCreated = await this.claseIiiRepository.save(newClaseIii);
    console.log("data",claseIiiCreated)
    // Asignar la clase III a la planilla

    // Guardar la Clase III

    // Asociar los vehículos a la clase III
    if (vehiculos && vehiculos.length > 0) {
      for (const vehiculo of vehiculos) {

        if (vehiculo) {
          console.log("cantidad",vehiculo.cantidad)
          const relation = new RelationClaseIiiVehiculoEntity();
          relation.cantVehiculos = vehiculo.cantidad
          
          relation.claseIii=claseIiiCreated;
          relation.vehiculo = vehiculo;
          console.log(relation.cantVehiculos)

          await this.relationClaseIiiVehiculoRepository.save(relation);
        }
      }
    }
    return  claseIiiCreated
  }
  findAll() {
    return `This action returns all claseIii`;
  }

  findOne(id: number) {
    return `This action returns a #${id} claseIii`;
  }

  update(id: number, updateClaseIiiDto: UpdateClaseIiiDto) {
    return `This action updates a #${id} claseIii`;
  }

  remove(id: number) {
    return `This action removes a #${id} claseIii`;
  }
}
