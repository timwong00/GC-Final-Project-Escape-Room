import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { GameProgressionService } from "../app/game-progression.service";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  timeRemaining: number = 5;
  interval;
  finishedTutorial: boolean = false;

  constructor(
    private router: Router,
    private gameProgressionService: GameProgressionService
  ) {}

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeRemaining > 0) {
        return this.timeRemaining--;
      } else if (this.timeRemaining === 0) {
        this.endGame();
      }
      // else {
      //   clearInterval(this.interval);
      //   this.timeRemaining = 300;
      // }
    }, 1000);
    this.finishedTutorial = true;
    return this.finishedTutorial;
  }

  stopTimer(): void {
    clearInterval(this.interval);
    this.timeRemaining = 300;
    this.finishedTutorial = false;
  }

  getTime() {
    // this.interval.onTimeout(console.log("end game"));
    return this.timeRemaining;
  }

  endGame() {
    this.router.navigate(["/endgame"]);
    this.finishedTutorial = false;
    clearInterval(this.interval);
    this.timeRemaining = 300;
    this.gameProgressionService.stopGame();
    this.gameProgressionService.setGameProgress(null);
    return this.finishedTutorial;
  }
}
