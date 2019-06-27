import { Component, OnInit, HostListener } from "@angular/core";
import { TimerService } from "../timer.service";
import { InventoryService } from "../inventory.service";
import { MatchService } from "../match.service";
import { GameProgressionService } from "../game-progression.service";
import { Router } from "@angular/router";

@Component({
  selector: "headerComponent",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  // when escape is pressed; toggle menu
  @HostListener(`window: keydown.escape`) escapeEvent() {
    this.openMenu();
  }

  itemsToMatch: any[] = [];
  inventoryItems: any[];
  clickedMenu: boolean = false;
  timeRemaining: any;
  playingGame: boolean;

  constructor(
    public timerService: TimerService,
    public matchService: MatchService,
    public inventoryService: InventoryService,
    public router: Router,
    public gameProgressionService: GameProgressionService
  ) {}

  ngOnInit() {
    this.inventoryItems = this.inventoryService.inventoryItems;
    this.playingGame = this.gameProgressionService.playingGame;
  }

  startTimer(): void {
    this.timerService.startTimer();
    this.timeRemaining = this.timerService.timeRemaining;
    return this.timeRemaining;
  }

  stopTimer(): void {
    this.timerService.stopTimer();
  }

  openMenu() {
    this.clickedMenu = !this.clickedMenu;
  }

  closeMenu() {
    this.clickedMenu = false;
  }

  matchItems1(inventoryItem) {
    this.matchService.setInventoryItemToMatch(inventoryItem);
  }

  quitGame() {
    location.replace("https://gc-escape-room.herokuapp.com");
  }

  clickedItem(index) {
    if (this.inventoryItems[index].isSelected) {
      this.inventoryItems[index].isSelected = false;
    } else {
      for (let i = 0; i < this.inventoryItems.length; i++) {
        this.inventoryItems[i].isSelected = false;
      }
      this.inventoryItems[index].isSelected = true;
    }
  }
}
