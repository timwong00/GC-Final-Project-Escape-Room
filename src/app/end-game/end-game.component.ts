import { Component, OnInit } from "@angular/core";
import { TimerService } from "../timer.service";
import { GameProgressionService } from "../game-progression.service";
import { TutorialroomService } from "../tutorialroom.service";
import { Room1Service } from "../room1.service";
import { Room2Service } from "../room2.service";
import { Room3Service } from "../room3.service";

@Component({
  selector: "end-game",
  templateUrl: "./end-game.component.html",
  styleUrls: ["./end-game.component.css"]
})
export class EndGameComponent implements OnInit {
  gameProgress: string;
  gameLost: boolean = false;
  gameWon: boolean = false;
  playingGame: boolean = false;
  isShowing: boolean = false;

  constructor(
    private timerService: TimerService,
    private gameProgressionService: GameProgressionService,
    private tutorialRoomService: TutorialroomService,
    private room1Service: Room1Service,
    private room2Service: Room2Service,
    private room3Service: Room3Service
  ) {}

  ngOnInit() {
    this.gameProgress = this.gameProgressionService.getGameProgress();
    if (this.gameProgress == "Game Won") {
      this.gameWon = true;
    } else {
      this.gameLost = true;
    }
    this.timerService.stopTimer();
  }

  quitGame() {
    location.reload();
  }
}
