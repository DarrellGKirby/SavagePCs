import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { DescriptionComponent } from "./description/description.component";

@Component({
  selector: 'app-character',
  imports: [DescriptionComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  private readonly route = inject(ActivatedRoute);  
  private readonly pcService = inject(CharactersService);

  id: number = 0;
  pc = this.pcService.selectedPC;

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.pcService.getPC(this.id);
  }
}
