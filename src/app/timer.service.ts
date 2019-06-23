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
      if (this.timeRemaining >= 0) {
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

  getTime() {
    // this.interval.onTimeout(console.log("end game"));
    return this.timeRemaining
  }

  endGame() {
    console.log("End game");
    this.router.navigate(["/endgame"]);
    this.gameProgressionService.stopGame();
      // while(this.timeRemaining > 0) {
      //   this.getTime();
      // }
    // if (this.timeRemaining = 0) {
    //   console.log("end game");
      // this.router.navigate(["/endgame"]);
      // this.gameProgressionService.setGameProgress("Game Lost");
    // } else {
    //   return;
    // }
  }

}
