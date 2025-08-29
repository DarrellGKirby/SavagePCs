import { Component, input, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Skill } from '../../../interfaces/skill';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Bonus } from '../../../interfaces/bonus';
import { BonusComponent } from "../bonus/bonus.component";

@Component({
  selector: 'app-skills',
  imports: [
    MatCardModule,
    MatTooltipModule,
    MatCheckboxModule,
    BonusComponent
],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SkillsComponent {
  skills = input<Skill[]>([]);
  woundsPenalty = input<number>(0);
  fatiguePenalty = input<number>(0);
  showAll = signal<boolean>(true);

  checkShowAll(current: boolean) {
    this.showAll.set(!current);
  }
}
