import { Component, input } from '@angular/core';
import { CharacterAttribute } from '../../../interfaces/char-attribute';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

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
}
