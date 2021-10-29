import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Jeckill' },
      { id: 12, name: 'Mr Hyde' },
      { id: 13, name: 'Magneto' },
      { id: 14, name: 'Moriarty' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Odin' },
      { id: 17, name: 'Zeus' },
      { id: 18, name: 'Poseidon' },
      { id: 19, name: 'Hades' },
      { id: 20, name: 'Athéna' }
    ];
    return {heroes};
  }

 // Remplace la méthode genId pour s'assurer qu'un héros a toujours un identifiant.
  // Si le tableau heroes est vide,
  // la méthode ci-dessous renvoie le nombre initial (11).
  // si le tableau heroes n'est pas vide, la méthode ci-dessous renvoie le plus haut
  // identifiant de héros + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}