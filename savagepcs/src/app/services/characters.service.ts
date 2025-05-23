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
    attributes: [],
    skills: []
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
      ],
      skills: [
        {
          name: 'Academics',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Athletics',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: []
        },
        {
          name: 'Battle',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: [
            {
              name: 'Land',
              die: {
                id: 2,
                description: 'd6',
                value: 6,
                imagePath: 'd6.png'
              }
            },
            {
              name: 'Naval',
              die: {
                id: 2,
                description: 'd6',
                value: 6,
                imagePath: 'd6.png'
              }
            }
          ]
        },
        {
          name: 'Boating',
          attribute: 'Agile',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Common Knowledge',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: [
            {
              name: 'Navigation',
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
          name: 'Driving',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Electronics',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Astrogation',
              die: {
                id: 1,
                description: 'd4',
                value: 4,
                imagePath: 'd4.png'
              }
            },
            {
              name: 'Communications',
              die: {
                id: 1,
                description: 'd4',
                value: 4,
                imagePath: 'd4.png'
              }
            },
            {
              name: 'Sensors & Targeting',
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
          name: 'Faith',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Fighting',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Brawling',
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
          name: 'Focus',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Gambling',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Hacking',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Healing',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Intimidation',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Language',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Notice',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: []
        },
        {
          name: 'Occult',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Performance',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Persuasion',
          attribute: 'Spirit',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          },
          specializations: [
            {
              name: 'Leadership',
              die: {
                id: 3,
                description: 'd8',
                value: 8,
                imagePath: 'd8.png'
              }
            }
          ]
        },
        {
          name: 'Piloting',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Psionics',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Repair',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Electronics',
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
          name: 'Research',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Riding',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Science',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Astronomy',
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
          name: 'Shooting',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Personal Guns',
              die: {
                id: 3,
                description: 'd8',
                value: 8,
                imagePath: 'd8.png'
              }
            }
          ]
        },
        {
          name: 'Stealth',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: []
        },
        {
          name: 'Survival',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Taunt',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Thievery',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
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
      ],
      skills: [
        {
          name: 'Academics',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Athletics',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: []
        },
        {
          name: 'Battle',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Boating',
          attribute: 'Agile',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Common Knowledge',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: []
        },
        {
          name: 'Driving',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Electronics',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Bots',
              die: {
                id: 2,
                description: 'd6',
                value: 6,
                imagePath: 'd6.png'
              }
            }
          ]
        },
        {
          name: 'Faith',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Fighting',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Clubs',
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
          name: 'Focus',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Gambling',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Hacking',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Healing',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Intimidation',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Language',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Notice',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          },
          specializations: [
            {
              name: 'Awareness',
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
          name: 'Occult',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Performance',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Persuasion',
          attribute: 'Spirit',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: []
        },
        {
          name: 'Piloting',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Psionics',
          attribute: 'Spirit',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Repair',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: [
            {
              name: 'Electronic Devices',
              die: {
                id: 2,
                description: 'd6',
                value: 6,
                imagePath: 'd6.png'
              }
            }
          ]
        },
        {
          name: 'Research',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Riding',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Science',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Shooting',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Rifles',
              die: {
                id: 3,
                description: 'd8',
                value: 8,
                imagePath: 'd8.png'
              }
            }
          ]
        },
        {
          name: 'Stealth',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: []
        },
        {
          name: 'Survival',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 1,
            description: 'd4',
            value: 4,
            imagePath: 'd4.png'
          },
          specializations: [
            {
              name: 'Outlands',
              die: {
                id: 1,
                description: 'd4',
                value: 4,
                imagePath: 'd4.png'
              }
            },
            {
              name: 'The Verdance',
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
          name: 'Taunt',
          attribute: 'Smarts',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        },
        {
          name: 'Thievery',
          attribute: 'Agility',
          proficient: false,
          defaultDie: 0,
          die: {
            id: 0,
            description: 'd4-2',
            value: 2,
            imagePath: 'd4-2.png'
          },
          specializations: []
        }
      ]
    }
  ];
}
