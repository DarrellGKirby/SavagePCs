import { Component, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-states',
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent {
  readonly MAX_WOUNDS: number = 3;
  readonly MAX_FATIGUE_LEVEL: number = 2;
  readonly FATIGUE_LEVEL: string[] = ['Normal', 'Fatigued', 'Exhausted', 'Incapicitated']
  woundsLimit = input<number>(this.MAX_WOUNDS);

  transmitWoundsPenalty = output<number>();
  transmitFatiguePenalty = output<number>();

  currentWound = signal<number>(0);
  currentFatigue = signal<number>(0);

  addWound() {
    let current = this.currentWound();
    if (current <= this.MAX_WOUNDS) {
      this.currentWound.set(++current);
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
}
