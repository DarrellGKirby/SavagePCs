import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-derived',
  imports: [
    MatCardModule
  ],
  templateUrl: './derived.component.html',
  styleUrl: './derived.component.css'
})
export class DerivedComponent {
  speed = input<number>(0);
  fighting = input<number>(0);
  vigor = input<number>(0);
}
