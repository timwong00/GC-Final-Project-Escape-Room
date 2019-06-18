import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  items: any;
  uItems: any;
  itemsToMatch: any[];
  inventoryItems: any[] = [];

  constructor() { }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  
  checkMatch(itemsToMatch) {
    // console.log(this.itemsToMatch);
    // console.log(itemsToMatch);
    if (itemsToMatch[0] == itemsToMatch[1]) {
      // console.log("Items match");
      let index = this.uItems.findIndex(item => item.item_name == itemsToMatch[1]);
      this.uItems.splice(index, 1);
      let index2 = this.inventoryItems.findIndex(item => item.match_item_name == itemsToMatch[0]);
      this.inventoryItems.splice(index2, 1);
      // console.log(index, index2);
      // console.log(this.uItems);
      //   console.log(this.inventoryItems);
        this.itemsToMatch = [];
    } else if (itemsToMatch[0] !== itemsToMatch[1]) {
      this.itemsToMatch = [];
      // console.log("Items do not match");
    }
    // console.log(this.itemsToMatch);
  }
}
