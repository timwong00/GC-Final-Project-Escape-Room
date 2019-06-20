import { Component, OnInit } from "@angular/core";
import { TimerService } from "../timer.service";
import { InventoryService } from "../inventory.service";
import { MatchService } from "../match.service";
import { Router } from "@angular/router";

@Component({
  selector: "headerComponent",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  itemsToMatch: any[] = [];
  inventoryItems: any[];
  clickedMenu: boolean = false;

  constructor(
    private timerService: TimerService,
    private matchService: MatchService,
    private inventoryService: InventoryService,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log(this.inventoryService.inventoryItems);
    this.inventoryItems = this.inventoryService.inventoryItems;
  }

  startTimer(): void {
    this.timerService.startTimer();
  }

  stopTimer(): void {
    this.timerService.stopTimer();
    // this.router.navigate(["/app-root"]);
  }

  openMenu() {
    this.clickedMenu = true;
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
}
