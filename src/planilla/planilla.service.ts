import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreatePlanillaDto } from './dto/create-planilla.dto';
import { UpdatePlanillaDto } from './dto/update-planilla.dto';
import { ClaseIService } from 'src/clase_i/clase_i.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ClaseIiiService } from 'src/clase_iii/clase_iii.service';
import { ClaseVService } from 'src/clase_v/clase_v.service';
import { Repository } from 'typeorm';
import { PlanillaEntity } from './entities/planilla.entity';
import { AguaService } from 'src/agua/agua.service';

@Injectable()
export class PlanillaService {

  constructor(
    @InjectRepository(PlanillaEntity)
    private readonly planillaRepository: Repository<PlanillaEntity>,
    @Inject(forwardRef(() => AguaService))
    private readonly aguaService: AguaService,
    @Inject(forwardRef(() => ClaseIService))
    private readonly claseIService: ClaseIService,
    @Inject(forwardRef(() => ClaseIiiService))
    private readonly claseIiiService: ClaseIiiService,
    @Inject(forwardRef(() => ClaseVService))
    private readonly claseVService: ClaseVService,
   ) {}


   async create(createPlanillaDto: any) {
    console.log("payload",createPlanillaDto)
    const { agua } = createPlanillaDto;
    const { claseIii } = createPlanillaDto;
    const { claseI } = createPlanillaDto;
    const { claseV } = createPlanillaDto;
    console.log("fin")

    // Crear la entidad de Planilla
    const newPlanilla = new PlanillaEntity();

    // Verificar si se envió Clase III y procesarla

    if (agua) {
      const aguaCreated= await this.aguaService.create(agua);
      newPlanilla.agua=aguaCreated
    }

    if (claseI) {
      const claseICreated=await this.claseIService.create(claseI);
      newPlanilla.claseI=claseICreated

    }

    if (claseIii) {
      const claseIiiCreated=await this.claseIiiService.create(claseIii);
      newPlanilla.claseIii=claseIiiCreated
    }

    if (claseV) {
      const claseVCreated=await this.claseVService.create(claseV);
      newPlanilla.claseV=claseVCreated
    }
    
    const planillaCreated =await this.planillaRepository.save(newPlanilla)

    return true;
  }

  // Método para crear la Clase III y relacionarla con la planilla
  
  findAll() {
    return this.planillaRepository.find({
      relations: [
        'agua', 
        'agua.vehiculo',          // Si deseas traer los datos relacionados de agua
        'claseI',
        'claseI.vehiculo',        // Si deseas traer los datos relacionados de clase I
        'claseIii', 
        'claseIii.claseIiiVehiculos',
        'claseIii.claseIiiVehiculos.vehiculo',     // Si deseas traer los datos relacionados de clase III
        'claseV',        // Incluye la clase V relacionada
        'claseV.claseVArmas',  // Incluye la relación claseVArmas dentro de claseV
        'claseV.claseVArmas.arma' // Si también deseas incluir los detalles de arma relacionados
      ],
    });
  }

  async findOne(planillaId: number) {
    const planillaFound = await this.planillaRepository.findOne({
      where: { id: planillaId },
      relations: [
        'agua',            // Relación con AguaEntity
        'claseI',          // Relación con ClaseIEntity
        'claseIii', 
        'claseIii.claseIiiVehiculos',
        'claseIii.claseIiiVehiculos.vehiculo', // Relación con ClaseIiiEntity
        'claseV',   
        'claseV.vehiculo',
        'claseV.situacionCombate',             // Relación con SituacionCombateEntity
        'claseV.claseVArmas',                  // Relación con RelationClaseVArmaEntity dentro de ClaseV
        'claseV.claseVArmas.arma',             // Relación con ArmaEntity dentro de RelationClaseVArmaEntity
        'claseV.situacionCombate.armaSituacionCombate', // Relación con RelationArmaSituacionCombateEntity
        'claseV.situacionCombate.armaSituacionCombate.arma' // Relación con ArmaEntity en RelationArmaSituacionCombateEntity
      ],
    });
    if(planillaFound.claseV){
      const armasPlanilla = planillaFound.claseV.claseVArmas.map(armaRelation => armaRelation.arma.id);

// Filtrar las relaciones arma-situacion-combate para obtener solo las que tienen armas de la planilla actual
    const armasFiltradasSituacionCombate = planillaFound.claseV.situacionCombate.armaSituacionCombate.filter(relation => 
      armasPlanilla.includes(relation.arma.id)
    );
    planillaFound.claseV.situacionCombate.armaSituacionCombate = armasFiltradasSituacionCombate;


    }
    
    // Asignar las armas filtradas de la situación de combate a la planilla encontrada
    console.log(planillaFound)
    if (!planillaFound) {
      throw new HttpException(
        'No existe un estudio con este ID.',
        HttpStatus.NOT_FOUND,
      );
    }
    return planillaFound;
  }

  update(id: number, updatePlanillaDto: UpdatePlanillaDto) {
    return `This action updates a #${id} planilla`;
  }

  remove(id: number) {
    return `This action removes a #${id} planilla`;
  }
}
