import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClaseVDto } from './dto/create-clase_v.dto';
import { UpdateClaseVDto } from './dto/update-clase_v.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanillaService } from 'src/planilla/planilla.service';
import { Repository } from 'typeorm';
import { ClaseVEntity } from './entities/clase_v.entity';
import { ArmaService } from 'src/arma/arma.service';
import { RelationClaseVArmaEntity } from 'src/common/entities/relation_clase_v_arma.entity';
import { RelationArmaSituacionCombateEntity } from 'src/common/entities/relation_arma_situacion_combate.entity';
import { VehiculoService } from 'src/vehiculo/vehiculo.service';
import { ArmaEntity } from 'src/arma/entities/arma.entity';

@Injectable()
export class ClaseVService {

  constructor(
    @InjectRepository(ClaseVEntity)
    private readonly claseVRepository: Repository<ClaseVEntity>,
    @InjectRepository(ArmaEntity)
    private readonly armaRepository: Repository<ArmaEntity>,
    @InjectRepository(RelationArmaSituacionCombateEntity)
    private readonly relationArmaSituacionCombateRepository: Repository<RelationArmaSituacionCombateEntity>,
    @InjectRepository(RelationClaseVArmaEntity)
    private readonly relationClaseVArmaRepository: Repository<RelationClaseVArmaEntity>,
    @Inject(forwardRef(() => PlanillaService))
    private readonly planillaService: PlanillaService,
    @Inject(forwardRef(() => VehiculoService))
    private readonly vehiculoService: VehiculoService,
    @Inject(forwardRef(() => ArmaService))
    private readonly armaService: ArmaService,
    
  ) {}

  async create(claseVDto: any) {
    const { armas, ...claseVData } = claseVDto;
    console.log("data",claseVData)

    // Crear la entidad de Clase III con los datos del DTO
    let newClaseV = new ClaseVEntity();
    newClaseV = claseVData
    const claseVCreated = await this.claseVRepository.save(newClaseV);
    console.log("data",claseVCreated)
    let cantDias= claseVCreated.cantDias
    // Asignar la clase III a la planilla

    // Guardar la Clase III

    // Asociar los vehículos a la clase III
    let cantVehiculos=0
    if (armas && armas.length > 0) {
      
      for (let arma of armas) {

        if (arma) {
          console.log("cantidad",arma.cantidad)
          const relation = new RelationClaseVArmaEntity();
          relation.cantArmamento = arma.cantidad
          const RelationArmaSituacionCombate = await this.relationArmaSituacionCombateRepository.findOne({
            where: { arma: { id: arma.id }, 
            situacionCombate: { id: newClaseV.situacionCombate.id } },
          });
          console.log("situacion", RelationArmaSituacionCombate)
          let municionNecesaria
          if(cantDias == 1){
            municionNecesaria=Math.ceil((RelationArmaSituacionCombate.primerDia*arma.cantidad)+(RelationArmaSituacionCombate.primerDia*arma.cantidad)*0.1)
            relation.cantMunicionNecesaria = municionNecesaria 
          }
          else{
            municionNecesaria=Math.ceil(((RelationArmaSituacionCombate.primerDia+RelationArmaSituacionCombate.diasSiguientes*(cantDias-1))*arma.cantidad)+ ((RelationArmaSituacionCombate.primerDia+RelationArmaSituacionCombate.diasSiguientes*(cantDias-1))*arma.cantidad)*0.1)
            relation.cantMunicionNecesaria =  municionNecesaria
          }
          if(claseVData.vehiculo){
            let numeroCajas=Math.ceil(municionNecesaria/claseVData.cantMunicionPorCaja)
            console.log(numeroCajas)
            let pesoMunicion=Math.ceil(numeroCajas*claseVData.pesoCaja)
            console.log(pesoMunicion)
            relation.pesoCaja=claseVData.pesoCaja
            relation.cantMunicionPorCaja=claseVData.cantMunicionPorCaja
            relation.pesoMunicion=Math.ceil(numeroCajas*claseVData.pesoCaja)
            cantVehiculos=cantVehiculos+(pesoMunicion/(claseVData.vehiculo.capacidad*1000))
          }
          console.log("CANTvEHICULOS",cantVehiculos)
          
          relation.claseV=claseVCreated;
          relation.arma = arma;

          await this.relationClaseVArmaRepository.save(relation);
        }
      }
    }
    claseVCreated.cantVehiculos = Math.ceil(cantVehiculos);

  // Guardar nuevamente la entidad Clase V con el valor actualizado de cantVehiculos
    await this.claseVRepository.save(claseVCreated);
    return claseVCreated
  }

  findAll() {
    return `This action returns all claseV`;
  }

  findOne(id: number) {
    return `This action returns a #${id} claseV`;
  }

  async update(id: number, updateClaseVDto: any) {
    const existingClaseV = await this.claseVRepository.findOne({
      where: { id },
    });
  
    if (!existingClaseV) {
      throw new NotFoundException(`Clase V entity with ID ${id} not found`);
    }
  
    // Actualizar los datos de la entidad
    Object.assign(existingClaseV, updateClaseVDto);
  
    // Actualizar las relaciones con armas
    const { armas } = updateClaseVDto;
    if (armas && armas.length > 0) {
      // Eliminar relaciones existentes
      await this.relationClaseVArmaRepository.delete({ claseV: { id } });
  
      // Crear nuevas relaciones con las armas
      for (const arma of armas) {
        const relation = new RelationClaseVArmaEntity();
        relation.cantArmamento = arma.cantidad;
  
        // Calcular munición necesaria
        const RelationArmaSituacionCombate = await this.relationArmaSituacionCombateRepository.findOne({
          where: { arma: { id: arma.id }, situacionCombate: { id: existingClaseV.situacionCombate.id } },
        });
  
        let municionNecesaria;
        if (existingClaseV.cantDias === 1) {
          municionNecesaria = Math.ceil((RelationArmaSituacionCombate.primerDia * arma.cantidad) + (RelationArmaSituacionCombate.primerDia * arma.cantidad) * 0.1);
        } else {
          municionNecesaria = Math.ceil(((RelationArmaSituacionCombate.primerDia + RelationArmaSituacionCombate.diasSiguientes * (existingClaseV.cantDias - 1)) * arma.cantidad) + ((RelationArmaSituacionCombate.primerDia + RelationArmaSituacionCombate.diasSiguientes * (existingClaseV.cantDias - 1)) * arma.cantidad) * 0.1);
        }
  
        relation.cantMunicionNecesaria = municionNecesaria;
  
        // Manejo de vehículos
        if (updateClaseVDto.vehiculo) {
          const numeroCajas = Math.ceil(municionNecesaria / updateClaseVDto.cantMunicionPorCaja);
          const pesoMunicion = Math.ceil(numeroCajas * updateClaseVDto.pesoCaja);
          relation.pesoCaja = updateClaseVDto.pesoCaja;
          relation.cantMunicionPorCaja = updateClaseVDto.cantMunicionPorCaja;
          relation.pesoMunicion = pesoMunicion;
  
          // Calcular la cantidad de vehículos necesaria
          const capacidadVehiculo = updateClaseVDto.vehiculo.capacidad * 1000; // capacidad en kilogramos
          const cantVehiculos = Math.ceil(pesoMunicion / capacidadVehiculo);
          existingClaseV.cantVehiculos = cantVehiculos;
        }
  
        relation.claseV = existingClaseV;
        relation.arma = arma;
        await this.relationClaseVArmaRepository.save(relation);
      }
    }
  
    // Guardar los cambios en la entidad Clase V
    return await this.claseVRepository.save(existingClaseV);
  }
  

  remove(id: number) {
    return `This action removes a #${id} claseV`;
  }
}
