import { Injectable } from "@angular/core";

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

  deleteItem(index: number) {
    // console.log(index);
    // console.log(this.items);
    this.items.splice(index, 1);
    return this.items;
  }

  setItems(itemList) {
    this.items = itemList;
  }
}
