import { Component, input } from '@angular/core';
import { CharacterHindrance } from '../../../interfaces/char-hindrance';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-hindrances',
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  templateUrl: './hindrances.component.html',
  styleUrl: './hindrances.component.css'
})
export class HindrancesComponent {
  hindrances = input<CharacterHindrance[]>([]);
}
