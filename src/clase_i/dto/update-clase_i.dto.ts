import { PartialType } from '@nestjs/mapped-types';
import { CreateClaseIDto } from './create-clase_i.dto';

export class UpdateClaseIDto extends PartialType(CreateClaseIDto) {}
