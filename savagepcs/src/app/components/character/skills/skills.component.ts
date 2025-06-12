import { Component, input, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Skill } from '../../../interfaces/skill';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Bonus } from '../../../interfaces/bonus';

@Component({
  selector: 'app-skills',
  imports: [
    MatCardModule,
    MatTooltipModule,
    MatCheckboxModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SkillsComponent {
  skills = input<Skill[]>([]);
  showAll = signal<boolean>(true);

  checkShowAll(current: boolean) {
    this.showAll.set(!current);
  }

  addBonuses(bonuses: Bonus[]): number {
    return bonuses.filter(b => !b.conditional).reduce((acc, curr) => acc + curr.amount, 0);
  }

  hasConditional(bonuses: Bonus[]): boolean {
    return bonuses.some(b => b.conditional);
  }

  getConditions(bonuses: Bonus[]): string[] {
    let list: string[] = [];
    bonuses.filter(b => b.conditional).forEach(b => {
      list.push(`${b.amount}: ${b.condition} - ${b.source}`);
    })
    return list;
  }
}
