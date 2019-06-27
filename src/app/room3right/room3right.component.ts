import { Component, OnInit } from "@angular/core";
import { Room3Service } from "../room3.service";
import { InventoryService } from "../inventory.service";
import { MatchService } from "../match.service";

@Component({
  selector: "room3right",
  templateUrl: "./room3right.component.html",
  styleUrls: ["./room3right.component.css"]
})
export class Room3rightComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  x: any;
  y: any;

  constructor(
    private room3Service: Room3Service,
    private inventoryService: InventoryService,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.items = this.room3Service.items;

    this.unlockItems = this.room3Service.uItems;
    this.itemsToMatch = this.matchService.itemsToMatch;
  }

  selectItem(inventoryItem) {
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room3Service.deleteItem(index);
  }

  matchItems2(itemToUnlock) {
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    this.matchService.checkMatch();
  }

  showUnlockHint(i) {
    this.room3Service.showUnlockItemHint(i);
  }

  hideUnlockHint(i) {
    this.room3Service.hideUnlockItemHint(i);
  }
  showItemHint(i) {
    this.room3Service.showItemHint(i);
  }

  hideItemHint(i) {
    this.room3Service.hideItemHint(i);
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
  
  hideNoMatch() {
    this.matchService.hideNoMatch();
  }
}
