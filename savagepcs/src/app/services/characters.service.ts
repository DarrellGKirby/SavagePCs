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
    skills: [],
    hindrances: []
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
      ],
      hindrances: [
        {
          name: 'Vow',
          subName: 'Serving the Corps',
          fromArchetype: true,
          isMajor: true,
          source: 'Core, p. 28',
          description: [
            'The character has sworn an oath to someone or something he believes in.',
            'The danger in fulfilling the Vow and how often it might occur determines the level of the Hindrance. A Minor Vow might be to serve an order with a broad mandate that rarely conflicts with the party’s goals.',
            'A Major Vow makes long-term and frequent demands on the servant’s time and results in great risks to his life.'
          ],
          shortDescription: 'The vow requires frequent and long-term demands with great risk of life.'
        },
        {
          name: 'Night Terrors',
          subName: '',
          fromArchetype: false,
          isMajor: true,
          source: 'Horror, p. 7',
          description: [
            'The Land of Nod is a constant nightmare for your investigator. He tosses and turns like a victim on a hot rack and likely keeps everyone within earshot of him awake with his nightly torment. The repeated barrage on his psyche results in an overall weakened resolve. He subtracts 1 from all Spirit rolls.',
            'Anyone who sleeps nearby likely has a long night ahead of them as well (see Sleep in Savage Worlds for possible consequences).'
          ],
          shortDescription: '-1 penalty to all Spirit rolls.'
        },
        {
          name: 'FTL Sickness',
          subName: '',
          fromArchetype: false,
          isMajor: false,
          source: 'Science Fiction, p. 23',
          description: [
            'Something about the spacer doesn’t sit right with the bizarre warping effects of hyperspace.  After each use of FTL (Faster Than Light) travel, he suffers a level of Fatigue that takes 24 hours to fade. FTL Sickness can cause Incapacitation but not death.',
            'As a Major Hindrance, the hero must make a Vigor roll (after taking Fatigue) or be Exhausted. A Critical Failure results in a heart attack (see the Fear Table in Savage Worlds).',
            'Note: This Hindrance may only be taken in campaigns where FTL travel is common.'
          ],
          shortDescription: 'Suffers a level of Fatigue for 25 hours after exiting slipstream.'
        },
              {
          name: 'Anemic',
          subName: '',
          fromArchetype: false,
          isMajor: false,
          source: 'Core, P. 22',
          description: [
            'Anemic characters are particularly susceptible to sickness, disease, environmental effects, and fatigue. They subtract 2 from Vigor rolls made to resist Fatigue (see Hazards, starting on page 125).'
          ],
          shortDescription: '−2 Vigor when resisting Fatigue.'
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
      ],
      hindrances: [
        {
          name: 'Outsider',
          subName: '',
          fromArchetype: true,
          isMajor: true,
          source: 'Core, p. 26',
          description: [
            'In a society made up of only a few types of people, your hero isn’t one of them. A Native American in a Western town, an alien in a scifi game of human marines, or a half-orc in a party of elves, dwarves, and humans are all examples. Locals are likely to raise prices on her, ignore pleas for help, and generally treat her as lower class.',
            'Outsiders subtract 2 from Persuasion rolls made to influence those who aren’t her own kind. The Major version also means the character has few or no legal rights in the main campaign area. She might be a different species among xenophobes, the civilization may be cruel and unenlightened toward strangers, or she might even be an artificial intelligence whose sapience isn’t acknowledged by the law.'
          ],
          shortDescription: 'Character has no legal rights or other serious disadvantages.'
        },
        {
          name: 'Phobia',
          subName: 'Medical Stations',
          fromArchetype: false,
          isMajor: true,
          source: 'Core, p. 26',
          description: [
            'Phobias are overwhelming and irrational fears that plague a hero’s psyche.',
            'Whenever a character is in the presence of his phobia (GM’s call, but generally sight), he subtracts 1 from all his Trait rolls if it’s a Minor Hindrance, and 2 if it’s Major.',
            'Phobias shouldn’t be too obvious; everyone should be afraid of vampires, for example, so it’s not a phobia, it’s common sense. Instead, the phobia usually centers on some random element the mind associates with the event.  Remember, phobias are irrational fears.'
          ],
          shortDescription: '−2 penalty to all Trait rolls'
        },
        {
          name: 'Rebellious',
          subName: '',
          fromArchetype: false,
          isMajor: false,
          source: 'Science Fiction, p. 23',
          description: [
            'Your spacer doesn’t handle authority figures well. Maybe he learned to fend for himself during the war or maybe he just never got along with bossy types. Regardless, he runs his mouth, disobeys direct orders, or just sits and stews, but however his disrespect manifests itself, it’s very evident to any observer. Not surprisingly, this makes your character very unpopular with those who think they’re in charge.',
            'On top of the obvious drawbacks, your hero subtracts 2 from Persuasion rolls made to influence any person in a position of authority.'
          ],
          shortDescription: '−2 to Persuasion rolls when dealing with authority figures.'
        },
              {
          name: 'Suspicious',
          subName: '',
          fromArchetype: false,
          isMajor: false,
          source: 'Copre, p. 28',
          description: [
            'Your character is suspicious of everyone.  As a Minor Hindrance, his paranoia causes frequent trust issues. He might demand full payment before doing a task, want every agreement in writing, or believe even his friends are out to get him.',
            'As a Major Hindrance, Support rolls to aid the distrustful individual are made at −2.'
          ],
          shortDescription: 'Distrusts most people.'
        }
      ]
    }
  ];
}
