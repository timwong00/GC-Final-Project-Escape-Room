import { Injectable } from "@angular/core";
import { AstMemoryEfficientTransformer } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  timeRemaining: number = 300;
  interval;
  constructor() {}

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timeRemaining >= 0) {
        return this.timeRemaining--;
      } else {
        this.timeRemaining = 300;
      }
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.interval);
    this.timeRemaining = 300;
  }
}