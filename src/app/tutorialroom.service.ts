import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TutorialroomService {
  items: any;
  uItems: any;
  isShowing: boolean = true;
  showingHint: boolean;
  collected: boolean = false;
  flashlightCollected: boolean = false;
  flashlightClue: boolean = false;

  constructor(private http: HttpClient) {}

  getTutorialItems() {
    return this.http.get("/tutorial-items", {
      responseType: "json"
    });
  }

  getTutorialUnlockItems() {
    return this.http.get("/tutorial-unlock-items", {
      responseType: "json"
    });
  }

  // hasItems() {
  //   return this.items;
  // }

  // hasUnlockItems() {
  //   return this.uItems;
  // }

  setItems(itemList) {
    this.items = itemList;
    // console.log(this.items);
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  deleteItem(itemName) {
    // console.log(index);
    // console.log(this.items);
    // console.log(itemName.item_name);
    let index = this.items.findIndex(
      item => item.item_name == itemName.item_name
    );
    // console.log(index);
    // // console.log(itemName, index);
    // this.items.splice(index, 1);
    this.items[index].collected = true;
    // return this.items;
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
    // console.log(this.items[i].showingHint);
    this.items[i].showingHint = false;
  }

  hideUnlockItemHint(i) {
    this.uItems[i].showingHint = false;
  }

  flashlightFound() {
    this.flashlightCollected = !this.flashlightCollected;
    this.flashlightClue = !this.flashlightClue;
  }
  flashlightOn() {
    this.flashlightClue = !this.flashlightClue;
  }
}
