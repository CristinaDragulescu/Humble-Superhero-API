import { SuperheroService } from './superhero.service';
import { Superhero } from './superhero.entity';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('superhero')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  create(@Body() superhero: Superhero): Superhero | { message: string } {
    return this.superheroService.create(superhero);
  }
  @Get()
  findAll(): Superhero[] {
    return this.superheroService.findAllSortedByHumilityScore();
  }
}
