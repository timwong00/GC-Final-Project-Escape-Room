import { Injectable } from "@angular/core";
import { Room1Service } from "./room1.service";
import { InventoryService } from "./inventory.service";
import { GameProgressionService } from "./game-progression.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  items: any;
  uItems: any;
  itemsToMatch: any[] = [];
  inventoryItems: any[] = [];
  gameProgress: any;

  constructor(
    private room1Service: Room1Service,
    private inventoryService: InventoryService,
    private gameProgressionService: GameProgressionService,
    private router: Router
    ) {}

  // setUnlockItems(uItemList) {
  //   this.uItems = uItemList;
  // }

  setInventoryItemToMatch(inventoryItem) {
    this.itemsToMatch.splice(0, 1, inventoryItem);
    // console.log(this.itemsToMatch);
  }

  setUnlockItemToMatch(unlockItem) {
    this.itemsToMatch.splice(1, 1, unlockItem);
    // console.log(this.itemsToMatch);
  }

  // getGameProgress(): string {
  //   this.gameProgress = this.gameProgressionService.getGameProgress();
  //   return this.gameProgress;
  // }  

  enterNextRoom() {
    if(this.room1Service.uItems.length == 0) {
      this.gameProgressionService.setGameProgress("Room 2");  //this needs to dynamically set progress

      // this.router.navigate(["/room2front"]);
      if (this.gameProgressionService.gameProgress === "Tutorial") {
        this.router.navigate(["/tutorialroomfront"]);
      } else if (this.gameProgressionService.gameProgress === "Room 1") {
        this.router.navigate(["/room1front"]);
      } else if (this.gameProgressionService.gameProgress === "Room 2") {
        this.router.navigate(["/room2front"]);
      } else if (this.gameProgressionService.gameProgress === "Room 3") {
        this.router.navigate(["/room3front"]);
      }      
      // console.log("exit");
    } else {
      return;
      // console.log("nope");
    }
  }


  checkMatch() {
    if (this.itemsToMatch[0] == this.itemsToMatch[1]) {   
      let index = this.room1Service.uItems.findIndex(
        item => item.item_name == this.itemsToMatch[1]
      );
      this.room1Service.uItems.splice(index, 1);
      let index2 = this.inventoryService.inventoryItems.findIndex(
        item => item.match_item_name == this.itemsToMatch[0]
      );
      this.inventoryService.inventoryItems.splice(index2, 1);
      this.enterNextRoom();
      this.itemsToMatch = [];
      // console.log("Items match");
    } else if (this.itemsToMatch[0] !== this.itemsToMatch[1]) {
      this.itemsToMatch = [];
      // console.log("Items do not match");
    }
  }
}
