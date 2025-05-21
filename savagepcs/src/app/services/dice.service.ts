import { Injectable, signal } from '@angular/core';
import { Die } from '../interfaces/die';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  dice = signal<Die[]>([]);

  constructor() { }

  loadDice() {
    var list = [
      {
        id: 0,
        description: 'd4-2',
        value: 2,
        imagePath: 'd4-2.png'
      },
      {
        id: 1,
        description: 'd4',
        value: 4,
        imagePath: 'd4.png'
      },
      {
        id: 2,
        description: 'd6',
        value: 6,
        imagePath: 'd6.png'
      },
      {
        id: 3,
        description: 'd8',
        value: 8,
        imagePath: 'd8.png'
      },
      {
        id: 4,
        description: 'd10',
        value: 10,
        imagePath: 'd10.png'
      },
      {
        id: 5,
        description: 'd12',
        value: 12,
        imagePath: 'd12.png'
      }
    ];
    this.dice.set(list);
  }
}
