import { Component, OnInit } from '@angular/core';
import { Room3Service } from "../room3.service";
import { InventoryService } from "../inventory.service";
import { MatchService } from "../match.service";


@Component({
  selector: 'room3left',
  templateUrl: './room3left.component.html',
  styleUrls: ['./room3left.component.css']
})
export class Room3leftComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];

  constructor(
    private room3Service: Room3Service,
    private inventoryService: InventoryService,
    private matchService: MatchService
    ) {}

  ngOnInit() {
    this.items = this.room3Service.items;

    this.unlockItems = this.room3Service.uItems;
    this.itemsToMatch = this.matchService.itemsToMatch;
  }

  selectItem(inventoryItem) {
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room3Service.deleteItem(index);
  }

  matchItems2(itemToUnlock) {
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    this.matchService.checkMatch();
  }

}
