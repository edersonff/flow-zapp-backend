import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

@Controller('numbers')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Post()
  create(@Body() createNumberDto: CreateNumberDto) {
    return this.numbersService.create(createNumberDto);
  }

  @Get()
  findAll() {
    // return this.numbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    id;
    // return this.numbersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumberDto: UpdateNumberDto) {
    return this.numbersService.update(+id, updateNumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numbersService.remove(+id);
  }
}
