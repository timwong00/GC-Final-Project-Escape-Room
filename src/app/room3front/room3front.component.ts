import { Component, OnInit } from "@angular/core";
import { Room3Service } from "../room3.service";
import { GameProgressionService } from "../game-progression.service";
import { InventoryService } from "../inventory.service";
import { MatchService } from "../match.service";

@Component({
  selector: "room3front",
  templateUrl: "./room3front.component.html",
  styleUrls: ["./room3front.component.css"]
})
export class Room3frontComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  gameProgress: string;
  // isShowing: boolean = false;

  constructor(
    public room3Service: Room3Service,
    private gameProgressionService: GameProgressionService,
    private inventoryService: InventoryService,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    if (this.room3Service.items == undefined) {
      this.room3Service.getRoomThreeItems().subscribe(response => {
        this.room3Service.setItems(response);
        this.items = this.room3Service.items;
      });
    } else {
      this.items = this.room3Service.items;
    }

    if (this.room3Service.items == undefined) {
      this.room3Service.getRoomThreeItems().subscribe(response => {
        this.room3Service.setUnlockItems(response);
        this.unlockItems = this.room3Service.uItems;
      });
    } else {
      this.unlockItems = this.room3Service.uItems;
    }
  }

  selectItem(inventoryItem) {
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room3Service.deleteItem(index);
  }

  setGameProgress(): void {
    this.gameProgressionService.setGameProgress(this.gameProgress);
  }

  matchItems2(itemToUnlock) {
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    this.matchService.checkMatch();
  }

  hidePrompt() {
    this.room3Service.hidePrompt();
  }

  // toggleShow() {
  //   this.isShowing = !this.isShowing;
  // }
}
