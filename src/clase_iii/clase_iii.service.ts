import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: number, updateClaseIiiDto: any) {

    console.log("claseiii", updateClaseIiiDto)
    const existingClaseIii = await this.claseIiiRepository.findOne({
      where: { id }, // Si Clase III tiene vehículos relacionados
    });
  
    if (!existingClaseIii) {
      throw new NotFoundException(`Clase III entity with ID ${id} not found`);
    }
  
    // Actualizar los datos de la entidad
    Object.assign(existingClaseIii, updateClaseIiiDto);
  
    // Si hay vehículos, actualizarlos
    const { vehiculos } = updateClaseIiiDto;
    console.log("claseiii", updateClaseIiiDto)
    console.log('vehiculos', vehiculos)
    console.log(existingClaseIii)
    if (vehiculos && vehiculos.length > 0) {
      // Eliminar relaciones existentes
      await this.relationClaseIiiVehiculoRepository.delete({ claseIii: { id } });
  
      // Crear nuevas relaciones con los vehículos
      for (const vehiculo of vehiculos) {
        const relation = new RelationClaseIiiVehiculoEntity();
        relation.cantVehiculos = vehiculo.cantidad;
        relation.claseIii = existingClaseIii;
        relation.vehiculo = vehiculo;
        await this.relationClaseIiiVehiculoRepository.save(relation);
      }
    }
  
    // Guardar los cambios en la entidad Clase III
    return await this.claseIiiRepository.save(existingClaseIii);
  }

  remove(id: number) {
    return `This action removes a #${id} claseIii`;
  }
}
