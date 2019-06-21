import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TutorialroomService {
  items: any;
  uItems: any;
  isShowing: boolean = true;

  constructor(private http: HttpClient) {}

  getTutorialItems() {
    return this.http.get("/tutorial-items", { responseType: "json" });
  }

  getTutorialUnlockItems() {
    return this.http.get("/tutorial-unlock-items", { responseType: "json" });
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
    this.items.splice(index, 1);
    // return this.items;
  }

  hidePrompt() {
    this.isShowing = false;
  }

}
