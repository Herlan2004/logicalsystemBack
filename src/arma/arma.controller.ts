import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArmaService } from './arma.service';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';

@Controller('arma')
export class ArmaController {
  constructor(private readonly armaService: ArmaService) {}

  @Post()
  create(@Body() createArmaDto: CreateArmaDto) {
    return this.armaService.create(createArmaDto);
  }

  @Get()
  findAll() {
    return this.armaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.armaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArmaDto: UpdateArmaDto) {
    return this.armaService.update(+id, updateArmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.armaService.remove(+id);
  }
}
