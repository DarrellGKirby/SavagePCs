import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  pcService = inject(CharactersService);

  
}
