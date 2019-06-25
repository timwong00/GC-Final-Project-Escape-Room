import { Component, OnInit, Input } from "@angular/core";
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
  // isShowing: boolean = false;
  gameProgress: string;
  x: any;
  y: any;

  constructor(
    public room1Service: Room1Service,
    public gameProgressionService: GameProgressionService,
    public matchService: MatchService,
    public inventoryService: InventoryService
  ) {}

  ngOnInit() {
    // this.timeRemaining = this.timerService.timeRemaining;
    // this.room1Service.timeRemaining = this.timeRemaining;
    // console.log(`${this.timeRemaining} in comp`);
    // this.room1Service.endGame();

    if (this.room1Service.items == undefined) {
      this.room1Service.getRoomOneItems().subscribe(response => {
        // this.items = response;
        // console.log(this.items);
        this.room1Service.setItems(response);
        this.items = this.room1Service.items;
      });
    } else {
      this.items = this.room1Service.items;
    }
    if (this.room1Service.uItems == undefined) {
      this.room1Service.getRoomOneUnlockItems().subscribe(response => {
        this.room1Service.setUnlockItems(response);
        this.unlockItems = this.room1Service.uItems;
        // this.unlockItems = response;
        // console.log(this.unlockItems);
        // this.door = this.unlockItems[0];
        // this.doorName = this.door.item_name;
        // this.doorImage = this.door.item_image;
        // console.log(this.room1Service.uItems);
      });
    } else {
      this.unlockItems = this.room1Service.uItems;
    }
    // this.inventoryItems = this.inventoryService.inventoryItems;
    // this.itemsToMatch = this.matchService.itemsToMatch;
    // console.log(this.inventoryItems);
  }

  selectItem(inventoryItem) {
    // console.log("Match item name:", inventoryItem.match_item_name);
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index) {
    this.room1Service.deleteItem(index);
    // console.log(itemName);
    // console.log(index);
  }

  // toggleShow() {
  //   this.isShowing = !this.isShowing;
  // }

  // need to set game progress when advancing to next level
  setGameProgress(): void {
    this.gameProgressionService.setGameProgress(this.gameProgress);
  }

  matchItems2(itemToUnlock) {
    // console.log(itemToUnlock);
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    // this.matchService.itemsToMatch.splice(1, 1, itemToUnlock);
    this.matchService.checkMatch();
    // console.log(this.itemsToMatch);
  }

  hidePrompt() {
    this.room1Service.hidePrompt();
  }

  showUnlockHint(i) {
    this.room1Service.showUnlockItemHint(i);
  }

  hideUnlockHint(i) {
    this.room1Service.hideUnlockItemHint(i);
  }

  flashlightCursor(mouseEvent) {
    this.x = mouseEvent.clientX;
    this.y = mouseEvent.clientY;
    if (typeof this.x !== undefined) {
      return this.x, this.y;
    }
  }

  isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
}
