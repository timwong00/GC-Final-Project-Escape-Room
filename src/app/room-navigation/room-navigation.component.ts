import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GameProgressionService } from "../game-progression.service";

@Component({
  selector: "room-navigation",
  templateUrl: "./room-navigation.component.html",
  styleUrls: ["./room-navigation.component.css"]
})
export class RoomNavigationComponent implements OnInit {
  // initial game progress should be tutorial
  gameProgress: any;
  constructor(
    private router: Router,
    private gameProgressionService: GameProgressionService
  ) {
    console.log(this.gameProgressionService.gameProgress);
  }

  ngOnInit() {}

  getGameProgress(): string {
    this.gameProgress = this.gameProgressionService.getGameProgress();
    return this.gameProgress;
  }

  navigateLeft(): void {
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialroomleft"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1left"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2left"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3left"]);
    }
  }

  navigateFront(): void {
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialroomfront"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1front"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2front"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3front"]);
    }
  }

  navigateRight(): void {
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialroomright"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1right"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2right"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3right"]);
    }
  }
}
