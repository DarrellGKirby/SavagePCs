import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersService } from './services/characters.service';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pcService = inject(CharactersService);

  constructor() {
    this.pcService.getPCList();
  }
}
