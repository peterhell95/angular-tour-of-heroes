import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',age: 2 },
      { id: 12, name: 'Narco',age: 2  },
      { id: 13, name: 'Bombasto',age: 2  },
      { id: 14, name: 'Celeritas',age: 2  },
      { id: 15, name: 'Magneta',age: 2 },
      { id: 16, name: 'RubberMan',age: 2 },
      { id: 17, name: 'Dynama',age: 2  },
      { id: 18, name: 'Dr IQ',age: 2 },
      { id: 19, name: 'Magma',age: 2  },
      { id: 20, name: 'Tornado',age: 2  }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}