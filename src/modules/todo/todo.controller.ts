import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaService } from '@shared/prisma/prisma.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly _prismaService: PrismaService) {}

  @Post()
  async create(@Body() data: { title: string; description: string }) {
    return this._prismaService.todo.create({ data });
  }

  @Get()
  async findAll() {
    return this._prismaService.todo.findMany();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { title: string; description: string },
  ) {
    return this._prismaService.todo.update({ where: { id }, data });
  }

  @Put(':id/done')
  async done(@Param('id') id: string) {
    return this._prismaService.todo.update({
      where: { id },
      data: { done: true },
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this._prismaService.todo.delete({ where: { id } });
  }
}
