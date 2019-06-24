import { Component, OnInit } from '@angular/core';
import { Room2Service } from "../room2.service";
import { MatchService } from "../match.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: 'room2right',
  templateUrl: './room2right.component.html',
  styleUrls: ['./room2right.component.css']
})
export class Room2rightComponent implements OnInit {
  unlockItems: any;
  items: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  constructor(
    private room2Service: Room2Service,
    private matchService: MatchService,
    private inventoryService: InventoryService
    ) { }

  ngOnInit() {
    this.items = this.room2Service.items;
    this.unlockItems = this.room2Service.uItems;
  }

  selectItem(inventoryItem) {
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room2Service.deleteItem(index);
  }

  matchItems2(itemToUnlock) {
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    this.matchService.checkMatch();
  }

  showUnlockHint(i) {
    this.room2Service.showUnlockItemHint(i);
  }

  hideUnlockHint(i) {
    this.room2Service.hideUnlockItemHint(i);
  }
  showItemHint(i) {
    this.room2Service.showItemHint(i);
  }

  hideItemHint(i) {
    this.room2Service.hideItemHint(i);
  }
}
