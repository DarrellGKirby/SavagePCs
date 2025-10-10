import { Component, computed, input } from '@angular/core';
import { Bonus } from '../../../interfaces/bonus';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-bonus',
  imports: [
    MatTooltipModule
  ],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.css'
})
export class BonusComponent {
  bonuses = input<Bonus[]>([]);
  woundsPenalty = input<number>(0);
  fatiguePenalty = input<number>(0);
  distractedPenalty = input<number>(0);

  totalBonus = computed<number>(() => {
    return this.bonuses().filter(b => !b.conditional).reduce((acc, curr) => acc + curr.amount, 0)
      - this.woundsPenalty()
      - this.fatiguePenalty()
      - this.distractedPenalty();
  });

  hasConditional = computed<boolean>(() => {
    return this.bonuses().filter(b => b.conditional).length > 0;
  })

  conditions = computed<string[]>(() => {
    let list: string[] = [];
    this.bonuses().filter(b => b.conditional).forEach(b => {
      list.push(`${b.amount}: ${b.condition} - ${b.source}`);
    })
    return list;
  });
}
