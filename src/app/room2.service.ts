import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class Room2Service {
  items: any;
  uItems: any;
  isShowing: boolean = true;

  constructor(private http: HttpClient) {}
  getRoomTwoItems() {
    return this.http.get("http://localhost:5000/room-2-items", {
      responseType: "json"
    });
  }

  getRoomTwoUnlockItems() {
    return this.http.get("http://localhost:5000/room-2-unlock-items", {
      responseType: "json"
    });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  setItems(itemList) {
    this.items = itemList;
    // console.log(this.items);
  }

  deleteItem(index) {
    this.items.splice(index, 1);
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
