import { Injectable, signal } from '@angular/core';
import { PCMenuItem } from '../interfaces/pc-menu-item';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  pcList = signal<PCMenuItem[]>([]);

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
}
