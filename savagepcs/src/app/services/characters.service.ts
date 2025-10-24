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
    hindrances: [],
    edges: [],
    credits: 0,
    gear: [],
    speed: 6,
    woundsLimit: 3,
    advancements: []
  }

  pcList = signal<PCMenuItem[]>([]);
  selectedPC = signal<Character>(this.empty);

  constructor() { }

  getPCList() {
    var list = [
      {
        id: 1,
        pcName: 'Ratia Horn'
      },
      {
        id: 2,
        pcName: 'Rast'
      },
      {
        id: 3,
        pcName: 'Ratia Horn (N1)'
      }
    ];
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
          },
          penalties: []
        },
        {
          id: 1,
          name: 'Smarts',
          abbreviation: 'Sm',
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          },
          penalties: []
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
          },
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          },
          penalties: []
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
          },
          penalties: [
            {
              source: 'Hindrance: Anemic',
              amount: -2,
              conditional: true,
              condition: 'When resisting fatigue'
            }
          ]
        }
      ],
      skills: [
        {
          name: 'Academics',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Applied Theory'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: ['Naval', 'Land'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
        },
        {
          name: 'Electronics',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Sensors & Comms', 'Vehicle Systems'],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: ['Martial Arts'],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
        },
        {
          name: 'Language',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Terran Standard', 'Savannat', 'Pacasian', 'Variksche'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: ['Leadership'],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: ['Starships'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: ['Physics'],
          penalties: []
        },
        {
          name: 'Shooting',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Personal Guns'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
      ],
      edges: [
        {
          name: 'Linguist',
          purchase: 'Free',
          fromArchetype: false,
          source: 'Core, p. 50',
          description: [
            'This world-traveler has an ear for languages.  She begins play knowing Terran Standard and one additional language as their home language.  She gets an additional language for every die above d4 in Smarts.'
          ],
          shortDescription: 'Character starts with 2 languages plus additional languages based on Smarts.'
        },
        {
          name: 'Unarmored Hero',
          purchase: 'Free',
          fromArchetype: false,
          source: 'Core, p. 141',
          description: [
            'Pulp action tales often feature heroes with little or no armor defeating far more heavily armored adversaries.',
            'In these settings, if a Wild Card chooses not to wear any armor (ignoring shields), he adds +2 bonus to his Soak rolls!'
          ],
          shortDescription: '+2 to Soak rolls when wearing no armor.'
        },
        {
          name: 'Common Bond',
          purchase: 'Human',
          fromArchetype: false,
          source: 'Core, p. 50',
          description: [
            'Selfless heroes and determined leaders know their greatest strength often comes from their companions, and are willing to give some of their own fortune, fate, or luck to support them.',
            'A character with this Edge may freely give her Bennies to any other character she can communicate with. The player should explain what form this takes, from a quick shout of encouragement to a welcome pat on the back.'
          ],
          shortDescription: 'The hero may freely give her Bennies to others.'
        },
        {
          name: 'Command',
          purchase: '',
          fromArchetype: true,
          source: 'Core, p. 45',
          description: [
            'Command is the basic ability to give clear instructions and support to allies in the thick of battle. Extras in Command Range add +1 to their Spirit rolls when attempting to recover from being Shaken and Vigor when attempting to recover from being Stunned.'
          ],
          shortDescription: '+1 to Extras’ Shaken or Stunned recovery rolls.'
        }
      ],
      credits: 90,
      gear: [
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Casual Clothing',
          weight : 2,
          cost: 20,
          description: '',
          provided: true
        },
        {
          category: 'Cyberware',
          type: 'Body',
          name: 'Synaptic Anchor',
          weight : 0,
          cost: 1000,
          description: 'This core implant enables wireless access to the Mnemoscape. It is the foundational implant for all Neural Interface-based cyberware. Connection is a limited free action.',
          provided: true
        },
        {
          category: 'Adventuring Gear',
          type: 'Electronics',
          name: 'Personal Data Device',
          weight : 0,
          cost: 500,
          description: 'PDDs are upgraded versions of modern mobile phones with a month-long duration on a single charge. PDDs grant a free reroll on Common Knowledge rolls when used to gather information from the CoreNet.',
          provided: true
        },
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Official Uniform',
          weight : 3,
          cost: 50,
          description: '',
          provided: true
        },
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Dress Uniform',
          weight : 3,
          cost: 200,
          description: '',
          provided: false
        },
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Magnetic Boots',
          weight : 4,
          cost: 100,
          description: 'Magnets in these heavy boots allow characters to walk on any metal surface at half Pace (they may not run).',
          provided: false
        },
        {
          category: 'Adventuring Gear',
          type: 'Electronics',
          name: 'Language Translator',
          weight : 1,
          cost: 250,
          description: 'Translates all known, sentient languages at d10 for common tongues and d6 for languages with lesser databases. Does not work for glyphs or forbidden languages.',
          provided: false
        },
        {
          category: 'Adventuring Gear',
          type: 'Basic Gear',
          name: 'Flashlight',
          weight : 1,
          cost: 20,
          description: 'Projects a 10” beam.',
          provided: false
        },
        {
          category: 'Ranged Weapon',
          type: 'Slugthrower',
          name: 'Medium Pistol',
          weight : 2,
          cost: 250,
          description: '2d6+1, AP: 2, Shots: 10',
          provided: false
        },
        {
          category: 'Ranged Weapon',
          type: 'Slugthrower',
          name: 'Medium Pistol Ammo',
          weight : 2,
          cost: 20,
          description: '50 rounds',
          provided: false
        },
        {
          category: 'Ranged Weapon',
          type: 'Slugthrower',
          name: 'Medium Pistol Ammo',
          weight : 2,
          cost: 20,
          description: '50 rounds',
          provided: false
        }
      ],
      speed: 6,
      woundsLimit: 3,
      advancements: []
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
          },
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          },
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          },
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          },
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          },
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
        },
        {
          name: 'Electronics',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Vehicle Systems'],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: ['Clubs'],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
        },
        {
          name: 'Language',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Terran Standard'],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: ['Awareness'],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Outsider',
              amount: -2,
              conditional: true,
              condition: 'when trying to influence those who are not her kind'
            },
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            },
            {
              source: "Hindrance: Rebellious",
              amount: -2,
              conditional: true,
              condition: 'dealing with authority figures'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: ['Gear'],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
        },
        {
          name: 'Shooting',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          },
          specializations: ['Rifles'],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
        },
        {
          name: 'Survival',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Outlands', 'The Verdance'],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Phobia [Medical Satations]',
              amount: -2,
              conditional: true,
              condition: 'whithin sight of source'
            }
          ]
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
      ],
      edges: [
        {
          name: 'Linguist',
          purchase: 'Free',
          fromArchetype: false,
          source: 'Core, p. 50',
          description: [
            'This world-traveler has an ear for languages.  She begins play knowing Terran Standard and one additional language as their home language.  She gets an additional language for every die above d4 in Smarts.'
          ],
          shortDescription: 'Character starts with 2 languages plus additional languages based on Smarts.'
        },
        {
          name: 'Unarmored Hero',
          purchase: 'Free',
          fromArchetype: false,
          source: 'Core, p. 141',
          description: [
            'Pulp action tales often feature heroes with little or no armor defeating far more heavily armored adversaries.',
            'In these settings, if a Wild Card chooses not to wear any armor (ignoring shields), he adds +2 bonus to his Soak rolls!'
          ],
          shortDescription: '+2 to Soak rolls when wearing no armor.'
        },
        {
          name: 'McGyver',
          purchase: 'Human',
          fromArchetype: false,
          source: 'Core, p. 49',
          description: [
            'A McGyver can improvise a device from common resources when the need arises.  Given a few simple items, he can make a Repair roll to craft improvised weapons, explosives, or tools, that last until used or the end of the encounter (GM’s call). This takes one entire turn, and he can’t move or take any other actions while constructing the device.',
            'Failure means the device isn’t ready. A Critical Failure means he doesn’t have the right materials and can’t create the device this encounter.',
            'Success creates a minor explosive (2d4 explosive in a Small Blast Template), a one shot projectile weapon like a “zip gun” (Range 5/10/20, Damage 2d6), rickety raft, electrical source, etc.',
            'A raise creates a larger explosive (2d6 in a Medium Blast Template or 2d4 in a Large), a better ranged weapon (five shots, 2d8 damage, Range 10/20/40), a more stable raft, a more powerful battery, etc.',
            'The quality or power of the creation is completely up to the Game Master, but creativity should be rewarded, particularly in the most dire and dramatic situations.'
          ],
          shortDescription: 'Quickly create improvised devices from scraps.'
        }
      ],
      credits: 0,
      gear: [
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Casual Clothing',
          weight : 2,
          cost: 20,
          description: '',
          provided: true
        }
      ],
      speed: 6,
      woundsLimit: 3,
      advancements: []
    },
    {
      id: 3,
      description: {
        name: 'Ratia Horn (N1)',
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
          },
          penalties: []
        },
        {
          id: 1,
          name: 'Smarts',
          abbreviation: 'Sm',
          die: {
            id: 3,
            description: 'd8',
            value: 8,
            imagePath: 'd8.png'
          },
          penalties: []
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
          },
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          },
          penalties: []
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
          },
          penalties: [
            {
              source: 'Hindrance: Anemic',
              amount: -2,
              conditional: true,
              condition: 'When resisting fatigue'
            }
          ]
        }
      ],
      skills: [
        {
          name: 'Academics',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Applied Theory'],
          penalties: []
        },
        {
          name: 'Athletics',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 1,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: [],
          penalties: []
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
          specializations: ['Naval', 'Land'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
        },
        {
          name: 'Electronics',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Sensors & Comms', 'Vehicle Systems'],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: ['Martial Arts'],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
        },
        {
          name: 'Language',
          attribute: 'Smarts',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Terran Standard', 'Savannat', 'Pacasian', 'Variksche'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: ['Leadership'],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: [
            {
              source: 'Hindrance: Night Terrors',
              amount: -1,
              conditional: false,
              condition: ''
            }
          ]
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
          specializations: ['Starships'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: ['Physics'],
          penalties: []
        },
        {
          name: 'Shooting',
          attribute: 'Agility',
          proficient: true,
          defaultDie: 0,
          die: {
            id: 2,
            description: 'd6',
            value: 6,
            imagePath: 'd6.png'
          },
          specializations: ['Personal Guns'],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
          specializations: [],
          penalties: []
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
      ],
      edges: [
        {
          name: 'Linguist',
          purchase: 'Free',
          fromArchetype: false,
          source: 'Core, p. 50',
          description: [
            'This world-traveler has an ear for languages.  She begins play knowing Terran Standard and one additional language as their home language.  She gets an additional language for every die above d4 in Smarts.'
          ],
          shortDescription: 'Character starts with 2 languages plus additional languages based on Smarts.'
        },
        {
          name: 'Unarmored Hero',
          purchase: 'Free',
          fromArchetype: false,
          source: 'Core, p. 141',
          description: [
            'Pulp action tales often feature heroes with little or no armor defeating far more heavily armored adversaries.',
            'In these settings, if a Wild Card chooses not to wear any armor (ignoring shields), he adds +2 bonus to his Soak rolls!'
          ],
          shortDescription: '+2 to Soak rolls when wearing no armor.'
        },
        {
          name: 'Common Bond',
          purchase: 'Human',
          fromArchetype: false,
          source: 'Core, p. 50',
          description: [
            'Selfless heroes and determined leaders know their greatest strength often comes from their companions, and are willing to give some of their own fortune, fate, or luck to support them.',
            'A character with this Edge may freely give her Bennies to any other character she can communicate with. The player should explain what form this takes, from a quick shout of encouragement to a welcome pat on the back.'
          ],
          shortDescription: 'The hero may freely give her Bennies to others.'
        },
        {
          name: 'Command',
          purchase: '',
          fromArchetype: true,
          source: 'Core, p. 45',
          description: [
            'Command is the basic ability to give clear instructions and support to allies in the thick of battle. Extras in Command Range add +1 to their Spirit rolls when attempting to recover from being Shaken and Vigor when attempting to recover from being Stunned.'
          ],
          shortDescription: '+1 to Extras’ Shaken or Stunned recovery rolls.'
        }
      ],
      credits: 90,
      gear: [
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Casual Clothing',
          weight : 2,
          cost: 20,
          description: '',
          provided: true
        },
        {
          category: 'Cyberware',
          type: 'Body',
          name: 'Synaptic Anchor',
          weight : 0,
          cost: 1000,
          description: 'This core implant enables wireless access to the Mnemoscape. It is the foundational implant for all Neural Interface-based cyberware. Connection is a limited free action.',
          provided: true
        },
        {
          category: 'Adventuring Gear',
          type: 'Electronics',
          name: 'Personal Data Device',
          weight : 0,
          cost: 500,
          description: 'PDDs are upgraded versions of modern mobile phones with a month-long duration on a single charge. PDDs grant a free reroll on Common Knowledge rolls when used to gather information from the CoreNet.',
          provided: true
        },
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Official Uniform',
          weight : 3,
          cost: 50,
          description: '',
          provided: true
        },
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Dress Uniform',
          weight : 3,
          cost: 200,
          description: '',
          provided: false
        },
        {
          category: 'Adventuring Gear',
          type: 'Clothing',
          name: 'Magnetic Boots',
          weight : 4,
          cost: 100,
          description: 'Magnets in these heavy boots allow characters to walk on any metal surface at half Pace (they may not run).',
          provided: false
        },
        {
          category: 'Adventuring Gear',
          type: 'Electronics',
          name: 'Language Translator',
          weight : 1,
          cost: 250,
          description: 'Translates all known, sentient languages at d10 for common tongues and d6 for languages with lesser databases. Does not work for glyphs or forbidden languages.',
          provided: false
        },
        {
          category: 'Adventuring Gear',
          type: 'Basic Gear',
          name: 'Flashlight',
          weight : 1,
          cost: 20,
          description: 'Projects a 10” beam.',
          provided: false
        },
        {
          category: 'Ranged Weapon',
          type: 'Slugthrower',
          name: 'Medium Pistol',
          weight : 2,
          cost: 250,
          description: '2d6+1, AP: 2, Shots: 10',
          provided: false
        },
        {
          category: 'Ranged Weapon',
          type: 'Slugthrower',
          name: 'Medium Pistol Ammo',
          weight : 2,
          cost: 20,
          description: '45 rounds',
          provided: false
        },
        {
          category: 'Ranged Weapon',
          type: 'Slugthrower',
          name: 'Medium Pistol Ammo',
          weight : 2,
          cost: 20,
          description: '50 rounds',
          provided: false
        }
      ],
      speed: 6,
      woundsLimit: 3,
      advancements: [
        {
          level: 'Novice 1',
          description: 'Vigor +1, Athletics +1'
        }
      ]
    }
  ];
}
