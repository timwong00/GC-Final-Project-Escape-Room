import { Component } from "@angular/core";
import { GameProgressionService } from "./game-progression.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  playingGame: boolean = false;
  isShowing: boolean = false;
  gameProgress: any = null;
  title = "escape-room";

  constructor(private gameProgressionService: GameProgressionService) {}

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

  startGame() {
    // change to "Tutorial"
    this.gameProgressionService.setGameProgress("Room 1");
    this.playingGame = true;
  }
}
