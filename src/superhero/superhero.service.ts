import { Injectable } from '@nestjs/common';
import { Superhero } from './superhero.entity';

@Injectable()
export class SuperheroService {
  private superheroInMemoryDatabase: Superhero[] = [];
  private idCounter = 1;

  private isHumilityScoreValid(score: number): boolean {
    return score >= 1 && score <= 10; //returns boolean indicating whether the score is valid.
  }

  create(superhero: Superhero): Superhero[] | { message: string } {
    if (!this.isHumilityScoreValid(superhero.humilityScore)) {
      return { message: 'Humility score must be between 0 and 10' };
    } else {
      superhero.id = this.idCounter++; //assign the unique id
      this.superheroInMemoryDatabase.push(superhero);
      return this.superheroInMemoryDatabase;
    }
  }

  findAllSortedByHumilityScore(): Superhero[] {
    return this.superheroInMemoryDatabase.sort(
      (a, b) => b.humilityScore - a.humilityScore, //sorts in descending order
    );
  }
}
