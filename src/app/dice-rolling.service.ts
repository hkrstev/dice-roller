import { Injectable } from '@angular/core';

export interface RollResult {
    sides: string;
    result: number;
}

@Injectable({
  providedIn: 'root'
})
export class DiceRollingService {

  constructor() { }

  rollHistory: RollResult[] = [];

  addRollHistory = (rr: RollResult) => {
    this.rollHistory = [
        ...this.rollHistory,
        rr
    ];

  }
}
