import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDto } from './idea.dto';

@Controller('idea')
export class IdeaController {

    constructor(private ideaService: IdeaService) { }

    @Get()
    showAllIdeas() { return this.ideaService.showAll() }

    @Post()
    createIdea(@Body() idea: IdeaDto) { return this.ideaService.create(idea) }

    @Get(":id")
    readIdea(@Param("id") id: string) { return this.ideaService.read(id) }

    @Put(":id")
    updateIdea(@Param("id") id: string, @Body() idea: Partial<IdeaDto>) {
        return this.ideaService.update(id, idea)
    }

    @Delete(":id")
    destroyIdea(@Param("id") id: string) { return this.ideaService.destroy(id) }
}
