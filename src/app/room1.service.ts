import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class Room1Service {
  items: any;
  uItems: any;
  // itemsToMatch: any[] = [];

  constructor(private http: HttpClient) {}

  getRoomOneItems() {
    return this.http.get("/room-1-items", { responseType: "json" });
  }

  getRoomOneUnlockItems() {
    return this.http.get("/room-1-unlock-items", { responseType: "json" });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  deleteItem(index) {
    // let index = this.items.findIndex(
    //   item => item.item_name == itemName.item_name
    // );
    this.items.splice(index, 1);
    // return this.items;
    // console.log(this.items);
    // console.log(index);
  }

  setItems(itemList) {
    this.items = itemList;
    // console.log(this.items);
  }

  hasItems() {
    return this.items;
  }

  hasUnlockItems() {
    return this.uItems;
  }
}
