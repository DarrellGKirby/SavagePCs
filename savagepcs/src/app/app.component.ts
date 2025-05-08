import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pcService = inject(CharactersService);

  constructor() {
    this.pcService.getPCList();
  }
}
