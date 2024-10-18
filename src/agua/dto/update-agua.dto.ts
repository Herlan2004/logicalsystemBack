import { PartialType } from '@nestjs/mapped-types';
import { CreateAguaDto } from './create-agua.dto';

export class UpdateAguaDto extends PartialType(CreateAguaDto) {}
