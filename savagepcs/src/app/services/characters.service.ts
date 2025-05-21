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
    },
    attributes: []
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
      },
      attributes: [
        {
          id: 0,
          name: 'Agility',
          abbreviation: 'Ag',
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          }
        },
        {
          id: 1,
          name: 'Smarts',
          abbreviation: 'Sm',
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          }
        },
        {
          id: 2,
          name: 'Spirit',
          abbreviation: 'Sp',
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          }
        },
        {
          id: 3,
          name: 'Strength',
          abbreviation: 'St',
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          }
        },
        {
          id: 4,
          name: 'Vigor',
          abbreviation: 'Vi',
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          }
        }
      ]
    },
    {
      id: 2,
      description: {
        name: 'Rast',
        species: 'Human',
        archetype: 'Outlander'
      },
      attributes: [
        {
          id: 0,
          name: 'Agility',
          abbreviation: 'Ag',
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          }
        },
        {
          id: 1,
          name: 'Smarts',
          abbreviation: 'Sm',
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          }
        },
        {
          id: 2,
          name: 'Spirit',
          abbreviation: 'Sp',
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          }
        },
        {
          id: 3,
          name: 'Strength',
          abbreviation: 'St',
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          }
        },
        {
          id: 4,
          name: 'Vigor',
          abbreviation: 'Vi',
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          }
        }
      ]
    }
  ];

}
