import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClaseIiiService } from './clase_iii.service';
import { CreateClaseIiiDto } from './dto/create-clase_iii.dto';
import { UpdateClaseIiiDto } from './dto/update-clase_iii.dto';

@Controller('clase-iii')
export class ClaseIiiController {
  constructor(private readonly claseIiiService: ClaseIiiService) {}

  @Post()
  create(@Body() createClaseIiiDto: any) {
    return this.claseIiiService.create(createClaseIiiDto);
  }

  @Get()
  findAll() {
    return this.claseIiiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.claseIiiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClaseIiiDto: UpdateClaseIiiDto) {
    return this.claseIiiService.update(+id, updateClaseIiiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.claseIiiService.remove(+id);
  }
}
