import { PartialType } from '@nestjs/mapped-types';
import { CreateClaseIiiDto } from './create-clase_iii.dto';

export class UpdateClaseIiiDto extends PartialType(CreateClaseIiiDto) {}
