import { Component, OnInit } from "@angular/core";
import { Room1Service } from "../room1.service";
import { MatchService } from "../match.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: "room1left",
  templateUrl: "./room1left.component.html",
  styleUrls: ["./room1left.component.css"]
})
export class Room1leftComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  x: any;
  y: any;

  constructor(
    private room1Service: Room1Service,
    private matchService: MatchService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.items = this.room1Service.items;
    // console.log(this.items);
    // this.room1Service.getRoomOneUnlockItems().subscribe(response => {
    //   this.unlockItems = response;
    //   // console.log(this.unlockItems);

    //   this.room1Service.setUnlockItems(response);
    // });
    this.unlockItems = this.room1Service.uItems;
    // this.inventoryItems = this.inventoryService.inventoryItems;
    this.itemsToMatch = this.matchService.itemsToMatch;
    // console.log(this.inventoryItems);
  }

  selectItem(inventoryItem) {
    // console.log("Match item name:", inventoryItem.match_item_name);
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room1Service.deleteItem(index);
    // console.log(index);
  }

  matchItems2(itemToUnlock) {
    // console.log(itemToUnlock);
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    // this.matchService.itemsToMatch.splice(1, 1, itemToUnlock);
    this.matchService.checkMatch();
    // console.log(this.itemsToMatch);
  }
  showUnlockHint(i) {
    this.room1Service.showUnlockItemHint(i);
  }

  hideUnlockHint(i) {
    this.room1Service.hideUnlockItemHint(i);
  }
  showItemHint(i) {
    this.room1Service.showItemHint(i);
  }

  hideItemHint(i) {
    this.room1Service.hideItemHint(i);
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
