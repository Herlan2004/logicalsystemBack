import { PartialType } from '@nestjs/mapped-types';
import { CreateArmaDto } from './create-arma.dto';

export class UpdateArmaDto extends PartialType(CreateArmaDto) {}
