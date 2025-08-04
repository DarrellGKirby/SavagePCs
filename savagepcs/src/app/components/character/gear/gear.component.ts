import { Component, input, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Equipment } from '../../../interfaces/equipment';

@Component({
  selector: 'app-gear',
  imports: [
    MatCardModule
  ],
  templateUrl: './gear.component.html',
  styleUrl: './gear.component.css',
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class GearComponent {
  gear = input<Equipment[]>([]);
  credits = input<number>(0);
}
