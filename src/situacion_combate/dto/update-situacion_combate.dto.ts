import { PartialType } from '@nestjs/mapped-types';
import { CreateSituacionCombateDto } from './create-situacion_combate.dto';

export class UpdateSituacionCombateDto extends PartialType(CreateSituacionCombateDto) {}
