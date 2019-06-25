import { Component, OnInit } from "@angular/core";
import { Room2Service } from "../room2.service";
import { GameProgressionService } from "../game-progression.service";
import { MatchService } from "../match.service";
import { InventoryService } from "../inventory.service";
// import { TimerService } from "../timer.service";
// import { Router } from "@angular/router";

@Component({
  selector: "room2front",
  templateUrl: "./room2front.component.html",
  styleUrls: ["./room2front.component.css"]
})
export class Room2frontComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  gameProgress: string;
  x: any;
  y: any;


  constructor(
    public room2Service: Room2Service,
    private gameProgressionService: GameProgressionService,
    private matchService: MatchService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    if (this.room2Service.items == undefined) {
      this.room2Service.getRoomTwoItems().subscribe(response => {
        this.room2Service.setItems(response);
        this.items = this.room2Service.items;
      });
    } else {
      this.items = this.room2Service.items;
    }
    if (this.room2Service.uItems == undefined) {
      this.room2Service.getRoomTwoUnlockItems().subscribe(response => {
        this.room2Service.setUnlockItems(response);
        this.unlockItems = this.room2Service.uItems;
      });
    } else {
      this.unlockItems = this.room2Service.uItems;
    }
  }

  selectItem(inventoryItem) {
    // console.log("Match item name:", inventoryItem.match_item_name);
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room2Service.deleteItem(index);
  }

  setGameProgress(): void {
    this.gameProgressionService.setGameProgress(this.gameProgress);
  }

  matchItems2(itemToUnlock) {
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    this.matchService.checkMatch();
  }

  hidePrompt() {
    this.room2Service.hidePrompt();
  }

  showUnlockHint(i) {
    this.room2Service.showUnlockItemHint(i);
  }

  hideUnlockHint(i) {
    this.room2Service.hideUnlockItemHint(i);
  }
  showItemHint(i) {
    this.room2Service.showItemHint(i);
  }

  hideItemHint(i) {
    this.room2Service.hideItemHint(i);
  }

  flashlightCursor(mouseEvent) {
    this.x = mouseEvent.clientX;
    this.y = mouseEvent.clientY;
    if (typeof this.x !== undefined) {
      return this.x, this.y;
    }
  }

  isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
}
