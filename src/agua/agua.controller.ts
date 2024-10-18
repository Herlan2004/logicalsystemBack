import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AguaService } from './agua.service';
import { CreateAguaDto } from './dto/create-agua.dto';
import { UpdateAguaDto } from './dto/update-agua.dto';

@Controller('agua')
export class AguaController {
  constructor(private readonly aguaService: AguaService) {}

  @Post()
  create(@Body() createAguaDto: any) {
    return this.aguaService.create(createAguaDto);
  }

  @Get()
  findAll() {
    return this.aguaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aguaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAguaDto: UpdateAguaDto) {
    return this.aguaService.update(+id, updateAguaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aguaService.remove(+id);
  }
}
