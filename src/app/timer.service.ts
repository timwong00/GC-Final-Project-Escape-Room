import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { GameProgressionService } from "../app/game-progression.service";
import { SoundeffectService } from "./soundeffect.service";

@Injectable({
  providedIn: "root"
})
export class TimerService {
  timeRemaining: number = 10;
  interval;
  finishedTutorial: boolean = false;

  constructor(
    private router: Router,
    private gameProgressionService: GameProgressionService,
    private soundEffectService: SoundeffectService
  ) {}

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeRemaining > 0) {
        if (this.timeRemaining === 150) {
          this.soundEffectService.playLowHeartbeat();
        } else if (this.timeRemaining === 80) {
          this.soundEffectService.stopHeartbeat();
          this.soundEffectService.playMidHeartbeat();
        } else if (this.timeRemaining === 30) {
          this.soundEffectService.stopHeartbeat();
          this.soundEffectService.playHighHeartbeat();
        }
        return this.timeRemaining--;
      } else if (this.timeRemaining === 0) {
        this.soundEffectService.stopHeartbeat();
        this.endGame();
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
    return this.timeRemaining;
  }

  endGame() {
    this.router.navigate(["/endgame"]);
    this.stopTimer();
    this.gameProgressionService.stopGame();
    this.gameProgressionService.setGameProgress(null);
  }
}
