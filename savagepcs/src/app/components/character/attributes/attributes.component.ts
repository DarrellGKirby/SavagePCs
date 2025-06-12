import { Component, input } from '@angular/core';
import { CharacterAttribute } from '../../../interfaces/char-attribute';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Bonus } from '../../../interfaces/bonus';

@Component({
  selector: 'app-attributes',
  imports: [
    MatCardModule,
    MatTooltipModule
  ],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {
  attributes = input<CharacterAttribute[]>([]);

  addBonuses(bonuses: Bonus[]): number {
    return bonuses.filter(b => !b.conditional).reduce((acc, curr) => acc + curr.amount, 0);
  }

  hasConditional(bonuses: Bonus[]): boolean {
    return bonuses.filter(b => b.conditional).length > 0;
  }

  getConditions(bonuses: Bonus[]): string[] {
    let list: string[] = [];
    bonuses.filter(b => b.conditional).forEach(b => {
      list.push(`${b.amount}: ${b.condition} - ${b.source}`);
    })
    return list;
  }
}
