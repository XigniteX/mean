import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService {
   getHeroes(): Hero[] {
    return HEROES;
  }

  getHeroesAsync(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}
}
