import { Injectable } from "@angular/core";
import { AstMemoryEfficientTransformer } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  timeRemaining: number = 300;
  interval;
  finishedTutorial: boolean = false;
  constructor() {}

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeRemaining > 0) {
        return this.timeRemaining--;
      } else {
        clearInterval(this.interval);
        this.timeRemaining = 300;
      }
    }, 1000);
    this.finishedTutorial = true;
    return this.finishedTutorial;
  }

  stopTimer(): void {
    clearInterval(this.interval);
    this.timeRemaining = 300;
    this.finishedTutorial = false;
  }
}
