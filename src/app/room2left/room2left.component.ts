import { Component, OnInit } from "@angular/core";
import { Room2Service } from "../room2.service";
import { MatchService } from "../match.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: "room2left",
  templateUrl: "./room2left.component.html",
  styleUrls: ["./room2left.component.css"]
})
export class Room2leftComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  x: any;
  y: any;

  constructor(
    private room2Service: Room2Service,
    private matchService: MatchService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.items = this.room2Service.items;
    this.unlockItems = this.room2Service.uItems;
    this.itemsToMatch = this.matchService.itemsToMatch;
  }

  selectItem(inventoryItem) {
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room2Service.deleteItem(index);
  }

  matchItems2(itemToUnlock) {
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    this.matchService.checkMatch();
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
