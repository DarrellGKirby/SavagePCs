import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharacterEdge } from '../../../interfaces/char-edge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-edges',
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  templateUrl: './edges.component.html',
  styleUrl: './edges.component.css'
})
export class EdgesComponent {
  edges = input<CharacterEdge[]>([]);
}
