import { Component, input } from '@angular/core';
import { CharacterAttribute } from '../../../interfaces/char-attribute';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-attributes',
  imports: [
    MatCardModule
  ],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {
  attributes = input<CharacterAttribute[]>([]);
}
