import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-landing',
  imports: [
    MatCardModule,
    MatListModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  pcService = inject(CharactersService);

  
}
