import { Component, input, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Skill } from '../../../interfaces/skill';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
}
