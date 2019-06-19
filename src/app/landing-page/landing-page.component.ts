import { Component, OnInit } from "@angular/core";
import { GameProgressionService } from "../game-progression.service";

@Component({
  selector: "landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  isShowing: boolean = false;

  constructor(private gameProgressionService: GameProgressionService) {}

  ngOnInit() {}

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

  startGame() {
    this.gameProgressionService.setGameProgress("Tutorial");
  }
}
