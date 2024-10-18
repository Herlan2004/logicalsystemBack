import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClaseIService } from './clase_i.service';
import { CreateClaseIDto } from './dto/create-clase_i.dto';
import { UpdateClaseIDto } from './dto/update-clase_i.dto';

@Controller('clase-i')
export class ClaseIController {
  constructor(private readonly claseIService: ClaseIService) {}

  @Post()
  create(@Body() createClaseIDto: CreateClaseIDto) {
    return this.claseIService.create(createClaseIDto);
  }

  @Get()
  findAll() {
    return this.claseIService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.claseIService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClaseIDto: UpdateClaseIDto) {
    return this.claseIService.update(+id, updateClaseIDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.claseIService.remove(+id);
  }
}
