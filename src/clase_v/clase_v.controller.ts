import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClaseVService } from './clase_v.service';
import { CreateClaseVDto } from './dto/create-clase_v.dto';
import { UpdateClaseVDto } from './dto/update-clase_v.dto';

@Controller('clase-v')
export class ClaseVController {
  constructor(private readonly claseVService: ClaseVService) {}

  @Post()
  create(@Body() createClaseVDto: any) {
    return this.claseVService.create(createClaseVDto);
  }

  @Get()
  findAll() {
    return this.claseVService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.claseVService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClaseVDto: UpdateClaseVDto) {
    return this.claseVService.update(+id, updateClaseVDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.claseVService.remove(+id);
  }
}
