import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GameProgressionService {
  gameProgress: 
  // any[] = ["Tutorial", "Room 1", "Room 2", "Room 3"]
  string = "Room 1"
  ;
  constructor() {}

  setGameProgress(gameProgress) {
    this.gameProgress = gameProgress;
    console.log(this.gameProgress);
    console.log(gameProgress);
    return this.gameProgress;
  }

  getGameProgress() {
    console.log(this.gameProgress);
    return this.gameProgress;
  }
}
