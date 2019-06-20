import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GameProgressionService } from "../game-progression.service";
import { fromEvent } from "rxjs";

@Component({
  selector: "room-navigation",
  templateUrl: "./room-navigation.component.html",
  styleUrls: ["./room-navigation.component.css"]
})
export class RoomNavigationComponent implements OnInit {
  gameProgress: any;
  navigateDirection: any = "front";
  constructor(
    private router: Router,
    private gameProgressionService: GameProgressionService
  ) {
    console.log(this.gameProgressionService.gameProgress);
  }

  ngOnInit() {
    this.gameProgress = this.gameProgressionService.getGameProgress();
  }

  getGameProgress(): string {
    this.gameProgress = this.gameProgressionService.getGameProgress();
    return this.gameProgress;
  }

  navigateLeft(): void {
    this.getGameProgress();
    this.navigateDirection = "left";
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialleft"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1left"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2left"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3left"]);
    }
  }

  navigateFront(): void {
    this.getGameProgress();
    this.navigateDirection = "front";
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialfront"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1front"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2front"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3front"]);
    }
  }

  navigateRight(): void {
    this.getGameProgress();
    this.navigateDirection = "right";
    if (this.gameProgress === "Tutorial") {
      this.router.navigate(["/tutorialright"]);
    } else if (this.gameProgress === "Room 1") {
      this.router.navigate(["/room1right"]);
    } else if (this.gameProgress === "Room 2") {
      this.router.navigate(["/room2right"]);
    } else if (this.gameProgress === "Room 3") {
      this.router.navigate(["/room3right"]);
    }
  }
}
