import { Component, OnInit, Input } from '@angular/core';
import { Room1Service } from "../room1.service";
import { GameProgressionService } from "../game-progression.service";
import { MatchService } from "../match.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: "room1front",
  templateUrl: "./room1front.component.html",
  styleUrls: ["./room1front.component.css"]
})
export class Room1frontComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  isShowing: boolean = false;
  gameProgress: string;
  constructor(
    private gameProgressionService: GameProgressionService,
    private room1Service: Room1Service, private matchService: MatchService, private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.room1Service.getRoomOneItems().subscribe(response => {
      this.items = response;
        // console.log(this.items);
        this.inventoryService.setItems(response);
    });
    this.room1Service.getRoomOneUnlockItems().subscribe(response => {
      this.unlockItems = response;
      // console.log(this.unlockItems);
      this.matchService.setUnlockItems(response);
    });
    this.inventoryItems = this.inventoryService.inventoryItems;
    this.itemsToMatch = this.matchService.itemsToMatch;
    // console.log(this.inventoryItems);
  }

  selectItem(inventoryItem) {
    // console.log(inventoryItem);
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index: number) {
    this.inventoryService.deleteItem(index);
    // console.log(index);
  }

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

  // need to set game progress when advancing to next level
  setGameProgress(): void {
    this.gameProgressionService.setGameProgress(this.gameProgress);
  }
 

  matchItems2(clickedItem2) {
    // console.log(clickedItem2);
    this.matchService.itemsToMatch.splice(1, 1, clickedItem2);
    this.matchService.checkMatch(this.itemsToMatch);
    // console.log(this.itemsToMatch);

  }

}
