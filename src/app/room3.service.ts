import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class Room3Service {
  items: any;
  uItems: any;
  isShowing: boolean = true;
  showingHint: boolean;
  collected: boolean = false;

  constructor(private http: HttpClient) {}
  getRoomThreeItems() {
    return this.http.get("http://localhost:5000/room-3-items", {
      responseType: "json"
    });
  }

  getRoomThreeUnlockItems() {
    return this.http.get("http://localhost:5000/room-3-unlock-items", {
      responseType: "json"
    });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  deleteItem(index) {
    // this.items.splice(index, 1);
    this.items[index].collected = true;
  }

  setItems(itemList) {
    this.items = itemList;
  }

  hidePrompt() {
    this.isShowing = false;
  }

  showItemHint(i) {
    this.items[i].showingHint = true;
  }

  showUnlockItemHint(i) {
    this.uItems[i].showingHint = true;
  }

  hideItemHint(i) {
    this.items[i].showingHint = false;
  }
  
  hideUnlockItemHint(i) {
    this.uItems[i].showingHint = false;
  }
}
