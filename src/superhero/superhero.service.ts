import { Injectable } from '@nestjs/common';
import { Superhero } from './superhero.entity';

@Injectable()
export class SuperheroService {
  private superhero: Superhero[] = [];
  private idCounter = 1;

  private isHumilityScoreValid(score: number): boolean {
    return score >= 1 && score <= 10;
  }

  create(superhero: Superhero): Superhero | { message: string } {
    if (!this.isHumilityScoreValid(superhero.humilityScore)) {
      return { message: 'Humility score must be between 0 and 10' };
    } else {
      superhero.id = this.idCounter++;
      this.superhero.push(superhero);
      return superhero;
    }
  }

  findAllSortedByHumilityScore(): Superhero[] {
    return this.superhero.sort((a, b) => a.humilityScore - b.humilityScore);
  }
}
