import { Component, input } from '@angular/core';
import { CharacterAttribute } from '../../../interfaces/char-attribute';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Bonus } from '../../../interfaces/bonus';
import { BonusComponent } from "../bonus/bonus.component";

@Component({
  selector: 'app-attributes',
  imports: [
    MatCardModule,
    MatTooltipModule,
    BonusComponent
],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {
  attributes = input<CharacterAttribute[]>([]);
  woundsPenalty = input<number>(0);
  fatiguePenalty = input<number>(0);
  distractedPenalty = input<number>(0);
}
