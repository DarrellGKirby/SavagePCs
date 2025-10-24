import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { advancement } from '../../../interfaces/advancement';

@Component({
  selector: 'app-advancement',
  imports: [
    MatCardModule
  ],
  templateUrl: './advancement.component.html',
  styleUrl: './advancement.component.css'
})
export class AdvancementComponent {
  advancements = input<advancement[]>([]);
}
