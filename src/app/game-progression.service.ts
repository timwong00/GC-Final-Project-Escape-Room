import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GameProgressionService {
  playingGame: boolean;
  gameProgress: any = null;
  navigateDirection: any = "front";
  constructor() {}

  setGameProgress(gameProgress) {
    this.gameProgress = gameProgress;
    // console.log(this.gameProgress);
    // console.log(gameProgress);
    return this.gameProgress;
  }

  getGameProgress() {
    // console.log(this.gameProgress);
    return this.gameProgress;
  }

  playGame() {
    this.playingGame = true;
  }
  stopGame() {
    this.playingGame = false;
  }
}
