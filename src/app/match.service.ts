import { Injectable } from "@angular/core";
import { Room1Service } from "./room1.service";
import { InventoryService } from "./inventory.service";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  items: any;
  uItems: any;
  itemsToMatch: any[] = [];
  inventoryItems: any[] = [];

  constructor(
    private room1Service: Room1Service,
    private inventoryService: InventoryService
  ) {}

  // setUnlockItems(uItemList) {
  //   this.uItems = uItemList;
  // }

  setInventoryItemToMatch(inventoryItem) {
    this.itemsToMatch.splice(0, 1, inventoryItem);
    // console.log(this.itemsToMatch);
  }

  setUnlockItemToMatch(unlockItem) {
    this.itemsToMatch.splice(1, 1, unlockItem);
    // console.log(this.itemsToMatch);
  }

  checkMatch() {
    // console.log(this.itemsToMatch);
    // console.log(itemsToMatch);
    if (this.itemsToMatch[0] == this.itemsToMatch[1]) {
      // console.log("Items match");
      let index = this.room1Service.uItems.findIndex(
        item => item.item_name == this.itemsToMatch[1]
      );
      this.room1Service.uItems.splice(index, 1);
      // console.log(this.itemsToMatch[0]);
      let index2 = this.inventoryService.inventoryItems.findIndex(
        item => item.match_item_name == this.itemsToMatch[0]
      );
      console.log(index2);
      this.inventoryService.inventoryItems.splice(index2, 1);
      // console.log(index, index2);
      // console.log(this.uItems);
      //   console.log(this.inventoryItems);
      // this.itemsToMatch = [];
    } else if (this.itemsToMatch[0] !== this.itemsToMatch[1]) {
      // this.itemsToMatch = [];
      // console.log("Items do not match");
    }
    // console.log(this.itemsToMatch);
  }
}
