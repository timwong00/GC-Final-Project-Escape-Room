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


  setInventoryItemToMatch(inventoryItem) {
    this.itemsToMatch.splice(0, 1, inventoryItem);
    // console.log(this.itemsToMatch);
  }

  setUnlockItemToMatch(unlockItem) {
    this.itemsToMatch.splice(1, 1, unlockItem);
    // console.log(this.itemsToMatch);
  }
  

  enterNextRoom() {
    if(this.room1Service.uItems.length == 0) {
      // this.router.navigate(["/room2front"]);
      if (this.gameProgressionService.gameProgress === "Tutorial") {
        this.router.navigate(["/room1front"]);
        this.gameProgressionService.setGameProgress("Room 1");
      } else if (this.gameProgressionService.gameProgress === "Room 1") {
        this.router.navigate(["/room2front"]);
        this.gameProgressionService.setGameProgress("Room 2");
      } else if (this.gameProgressionService.gameProgress === "Room 2") {
        this.router.navigate(["/room3front"]);
        this.gameProgressionService.setGameProgress("Room 3");
      } else if (this.gameProgressionService.gameProgress === "Room 3") {
        // this.router.navigate(["/room3front"]);
        // need to be you win page
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
