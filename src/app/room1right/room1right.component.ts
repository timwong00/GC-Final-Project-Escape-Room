import { Component, OnInit } from "@angular/core";
import { Room1Service } from "../room1.service";
import { MatchService } from "../match.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: "room1right",
  templateUrl: "./room1right.component.html",
  styleUrls: ["./room1right.component.css"]
})
export class Room1rightComponent implements OnInit {
  items: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  // scalpel: any;
  // scalpelName: string;
  // scalpelImage: any;

  constructor(
    private room1Service: Room1Service,
    private matchService: MatchService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.items = this.room1Service.items;
    // console.log(this.items)
    // this.scalpel = this.items[1];
    // this.scalpelName = this.scalpel.item_name;
    // this.scalpelImage = this.scalpel.item_image;

    // this.room1Service.setItems(response);

    this.itemsToMatch = this.matchService.itemsToMatch;
  }

  selectItem(inventoryItem) {
    // console.log(inventoryItem);
    // console.log("Match item name:", inventoryItem.match_item_name);
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room1Service.deleteItem(index);
    // console.log(itemName);
    // this.items = this.room1Service.returnItems();
    // console.log(this.items);
    // this.scalpel = this.items[1];
    // this.scalpelName = this.scalpel.item_name;
    // this.scalpelImage = this.scalpel.item_image;
  }
  showItemHint(i) {
    this.room1Service.showItemHint(i);
  }

  hideItemHint(i) {
    this.room1Service.hideItemHint(i);
  }
}
