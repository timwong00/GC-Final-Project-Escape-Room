import { Component, OnInit, HostListener } from "@angular/core";
import { TimerService } from "../timer.service";
import { InventoryService } from "../inventory.service";
import { MatchService } from "../match.service";
import { GameProgressionService} from "../game-progression.service";
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
  playingGame:boolean;

  constructor(
    public timerService: TimerService,
    public matchService: MatchService,
    public inventoryService: InventoryService,
    public router: Router,
    public gameProgressionService: GameProgressionService
  ) {}

  ngOnInit() {
    // console.log(this.inventoryService.inventoryItems);
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
    // this.router.navigate(["/app-root"]);
  }

  openMenu() {
    this.clickedMenu = !this.clickedMenu;
  }

  closeMenu() {
    this.clickedMenu = false;
  }

  matchItems1(inventoryItem) {
    // console.log(inventoryItem);
    this.matchService.setInventoryItemToMatch(inventoryItem);
    // this.matchService.checkMatch(inventoryItem);
    // this.itemsToMatch.splice(0, 1, clickedItem1);
  }

  checkTimer() {
    // while(this.timeRemaining > 0) {
    //   this.timeRemaining = this.timerService.getTime();
    // }
    this.timeRemaining = this.timerService.getTime();
    if(this.timeRemaining === 0) {
      this.timerService.endGame();
    }
    // set playing game back to false when reset game or quit game
}
}
