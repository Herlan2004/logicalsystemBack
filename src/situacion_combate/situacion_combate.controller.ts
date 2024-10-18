import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SituacionCombateService } from './situacion_combate.service';
import { CreateSituacionCombateDto } from './dto/create-situacion_combate.dto';
import { UpdateSituacionCombateDto } from './dto/update-situacion_combate.dto';

@Controller('situacion-combate')
export class SituacionCombateController {
  constructor(private readonly situacionCombateService: SituacionCombateService) {}

  @Post()
  create(@Body() createSituacionCombateDto: CreateSituacionCombateDto) {
    return this.situacionCombateService.create(createSituacionCombateDto);
  }

  @Get()
  findAll() {
    return this.situacionCombateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.situacionCombateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSituacionCombateDto: UpdateSituacionCombateDto) {
    return this.situacionCombateService.update(+id, updateSituacionCombateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.situacionCombateService.remove(+id);
  }
}
