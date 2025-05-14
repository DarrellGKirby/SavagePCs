import { Injectable, signal } from '@angular/core';
import { PCMenuItem } from '../interfaces/pc-menu-item';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  empty: Character = {
    id: -1,
    description: {
      name: 'empty',
      species: '',
      archetype: ''
    }
  }

  pcList = signal<PCMenuItem[]>([]);
  selectedPC = signal<Character>(this.empty);

  constructor() { }

  getPCList() {
    var list = [ {
      id: 1,
      pcName: 'Ratia Horn'
    },
    {
      id: 2,
      pcName: 'Rast'
    } ];
    this.pcList.set(list);
  }

  getPC(id: number) {
    this.selectedPC.set(this.pcs.find(p => p.id === id) ?? this.empty);
  }

  pcs: Character[] = [
    {
      id: 1,
      description: {
        name: 'Ratia Horn',
        species: 'Human',
        archetype: 'Tatsuken Graduate'
      }
    },
    {
      id: 2,
      description: {
        name: 'Rast',
        species: 'Human',
        archetype: 'Outlander'
      }
    }
  ];

}
