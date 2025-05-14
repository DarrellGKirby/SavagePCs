import { Component, input } from '@angular/core';
import { CharacterDescription } from '../../../interfaces/char-description';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-description',
  imports: [
    MatCardModule
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  description = input<CharacterDescription>();
}
