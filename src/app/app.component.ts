import { Component } from "@angular/core";
import { GameProgressionService } from "./game-progression.service";
import { TutorialroomService } from "./tutorialroom.service";
import { Room1Service } from "./room1.service";
import { Room2Service } from "./room2.service";
import { Room3Service } from "./room3.service";
import { SoundeffectService } from "./soundeffect.service";

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

  constructor(
    private gameProgressionService: GameProgressionService,
    private tutorialRoomService: TutorialroomService,
    private room1Service: Room1Service,
    private room2Service: Room2Service,
    private room3Service: Room3Service,
    private soundEffectService: SoundeffectService
  ) {}

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

  startGame() {
    // change to "Tutorial"
    this.gameProgressionService.setGameProgress("Room 3");
    this.playingGame = true;
    this.soundEffectService.playCreepyAmbient();
    this.tutorialRoomService.isShowing = true;
    this.room1Service.isShowing = true;
    this.room2Service.isShowing = true;
    this.room3Service.isShowing = true;
  }
}
