import { Injectable } from "@angular/core";
import { IterableChangeRecord_ } from "@angular/core/src/change_detection/differs/default_iterable_differ";

@Injectable({
  providedIn: "root"
})
export class InventoryService {
  uItems: any;
  items: any;
  inventoryItems: any[] = [];

  constructor() {}

  collectItem(inventoryItem) {
    this.inventoryItems.push(inventoryItem);
    // console.log(inventoryItem.match_item_name);
    // console.log(this.inventoryItems);
    return this.inventoryItems;
  }

  deleteItem(itemName) {
    // console.log(index);
    // console.log(this.items);
    let index = this.items.findIndex(item => item.item_name == itemName);
    // console.log(index);
    // console.log(itemName, index);
    this.items.splice(index, 1);
    return this.items;
  }

  setItems(itemList) {
    this.items = itemList;
    // console.log(this.items);
  }
}
