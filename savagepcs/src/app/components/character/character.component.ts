import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { DescriptionComponent } from "./description/description.component";
import { AttributesComponent } from "./attributes/attributes.component";
import { SkillsComponent } from "./skills/skills.component";
import { HindrancesComponent } from "./hindrances/hindrances.component";
import { EdgesComponent } from "./edges/edges.component";
import { GearComponent } from "./gear/gear.component";
import { DerivedComponent } from "./derived/derived.component";
import { StatesComponent } from "./states/states.component";

@Component({
  selector: 'app-character',
  imports: [DescriptionComponent, AttributesComponent, SkillsComponent, HindrancesComponent, EdgesComponent, GearComponent, DerivedComponent, StatesComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  private readonly route = inject(ActivatedRoute);  
  private readonly pcService = inject(CharactersService);

  id: number = 0;
  pc = this.pcService.selectedPC;
  fightingValue = computed(() => {
    return this.pc().skills.find(s => s.name === 'Fighting')?.die.value ?? 0;
  });
  vigorValue = computed(() => {
    return this.pc().attributes.find(a => a.name === 'Vigor')?.die.value ?? 0;
  });
  woundsPenalty = signal<number>(0);
  fatiguePenalty = signal<number>(0);

  constructor() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.pcService.getPC(this.id);
  }

  setWoundsPenalty(penalty: number) {
    this.woundsPenalty.set(penalty);
  }

  setFatiguePenalty(penalty: number) {
    this.fatiguePenalty.set(penalty);
  }
}
