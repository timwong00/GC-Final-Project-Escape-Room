import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Room1Service {

  items: any;
  uItems: any;
  itemsToMatch: any[] = [];
  selectedItems: any[] = [];

  constructor(private http: HttpClient) {
  }

  getItems() {
    return this.http.get("/items", { responseType: "json" });
  }

  getUnlockItems() {
    return this.http.get("/unlock-items", { responseType: "json" });
  }

  collectItem(selectedItem) {
    this.selectedItems.push(selectedItem);
    // console.log(this.selectedItems);
    return this.selectedItems; 
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    return this.items;
    // console.log(index);
    // console.log(this.items);
  }

  setItems(itemList) {
    this.items = itemList;
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  checkMatch(itemsToMatch) {
    if (itemsToMatch[0] == itemsToMatch[1]) {
      console.log("Items match");
      let index = this.uItems.findIndex(item => item.item_name == itemsToMatch[1]);
      this.uItems.splice(index, 1);
      let index2 = this.selectedItems.findIndex(item => item.match_item_name == itemsToMatch[0]);
      this.selectedItems.splice(index2, 1);
      // console.log(index, index2);
      console.log(this.uItems);
        console.log(this.selectedItems);
        this.itemsToMatch = [];
    } else if (itemsToMatch[0] !== itemsToMatch[1]) {
      this.itemsToMatch = [];
      console.log("Items do not match");
    }
    console.log(this.itemsToMatch);
  }

}