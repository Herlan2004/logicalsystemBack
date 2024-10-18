import { PartialType } from '@nestjs/mapped-types';
import { CreateClaseVDto } from './create-clase_v.dto';

export class UpdateClaseVDto extends PartialType(CreateClaseVDto) {}
