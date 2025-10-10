import { Component, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-states',
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent {
  readonly MAX_WOUNDS: number = 3;
  readonly MAX_FATIGUE_LEVEL: number = 2;
  readonly FATIGUE_LEVEL: string[] = ['Normal', 'Fatigued', 'Exhausted', 'Incapicitated'];
  distractedPenalty: number = 2;
  woundsLimit = input<number>(this.MAX_WOUNDS);

  transmitWoundsPenalty = output<number>();
  transmitFatiguePenalty = output<number>();
  transmitDistractedPenalty = output<number>();

  currentWound = signal<number>(0);
  currentFatigue = signal<number>(0);
  shaken = signal<boolean>(false);
  distracted = signal<boolean>(false);
  vulnerable = signal<boolean>(false);
  stunned = signal<boolean>(false);
  incapacitated = signal<boolean>(false);
  entangled = signal<boolean>(false);
  bound = signal<boolean>(false);

  addWound() {
    let current = this.currentWound();
    if (current <= this.MAX_WOUNDS) {
      this.currentWound.set(++current);
      this.setShaken(true);
    } else {
      this.setIncapacitated(true);
    }
    this.sendWoundsPenalty();
  }

  healWound() {
    let current = this.currentWound();
    if (current > 0) {
      this.currentWound.set(--current);
    }
    this.sendWoundsPenalty();
  }

  sendWoundsPenalty() {
    this.transmitWoundsPenalty.emit(this.currentWound() > this.MAX_WOUNDS ? this.MAX_WOUNDS : this.currentWound());
  }

  addFatigue() {
    let current = this.currentFatigue();
    if (current <= this.MAX_FATIGUE_LEVEL) {
      this.currentFatigue.set(++current);
    }
    if (current > this.MAX_FATIGUE_LEVEL) {
      this.setIncapacitated(true);
    }
    this.sendFatiguePenalty();
  }

  removeFatigue() {
    let current = this.currentFatigue();
    if (current > 0) {
      this.currentFatigue.set(--current);
    }
    this.sendFatiguePenalty();
  }

  sendFatiguePenalty() {
    this.transmitFatiguePenalty.emit(this.currentFatigue() > this.MAX_FATIGUE_LEVEL ? this.MAX_FATIGUE_LEVEL : this.currentFatigue());
  }

  setShaken(value: boolean) {
    this.shaken.set(value);
  }

  setDistracted(value: boolean) {
    this.distracted.set(value);
    this.transmitDistractedPenalty.emit(this.distracted() ? this.distractedPenalty : 0);
  }

  setVulnerable(value: boolean) {
    this.vulnerable.set(value);
  }

  setIncapacitated(value: boolean) {
    this.incapacitated.set(value);
  }

  setStunned(value: boolean) {
    this.stunned.set(value);
  }

  setEntangled(value: boolean) {
    this.entangled.set(value);
    this.vulnerable.set(value);
  }

  setBound(value: boolean) {
    this.bound.set(value);
    this.distracted.set(value);
    this.vulnerable.set(value);
  }
}
