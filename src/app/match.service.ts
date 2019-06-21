import { Injectable } from "@angular/core";
import { Room1Service } from "./room1.service";
import { Room2Service } from "./room2.service";
import { Room3Service } from "./room3.service";
import { InventoryService } from "./inventory.service";
import { GameProgressionService } from "./game-progression.service";
import { Router } from "@angular/router";
import { TutorialroomService } from "./tutorialroom.service";
import { TimerService } from "./timer.service";

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
    private room2Service: Room2Service,
    private room3Service: Room3Service,
    private inventoryService: InventoryService,
    private gameProgressionService: GameProgressionService,
    private tutorialRoomService: TutorialroomService,
    private router: Router,
    private timerService: TimerService
  ) {}

  setInventoryItemToMatch(inventoryItem) {
    this.itemsToMatch.splice(0, 1, inventoryItem);
  }

  setUnlockItemToMatch(unlockItem) {
    if (this.itemsToMatch !== []) {
      this.itemsToMatch.splice(1, 1, unlockItem);
    }
  }

  enterNextRoom() {
    if (this.gameProgressionService.gameProgress === "Tutorial") {
      if (this.tutorialRoomService.uItems.length == 0) {
        this.router.navigate(["/room1front"]);
        this.timerService.startTimer();
        this.gameProgressionService.setGameProgress("Room 1");
        this.gameProgressionService.navigateDirection = "front";
      }
    } else if (this.gameProgressionService.gameProgress === "Room 1") {
      if (this.room1Service.uItems.length == 0) {
        this.router.navigate(["/room2front"]);
        this.gameProgressionService.setGameProgress("Room 2");
        this.gameProgressionService.navigateDirection = "front";
      }
    } else if (this.gameProgressionService.gameProgress === "Room 2") {
      if (this.room2Service.uItems.length == 0) {
        this.router.navigate(["/room3front"]);
        this.gameProgressionService.setGameProgress("Room 3");
        this.gameProgressionService.navigateDirection = "front";
      } else if (this.gameProgressionService.gameProgress === "Room 3") {
        if (this.room3Service.uItems.length == 0) {
          this.router.navigate(["/endgame"]);
          this.gameProgressionService.setGameProgress("Game Won");
        }
      }
    }
  }

  checkMatch() {
    if (this.itemsToMatch[0] == this.itemsToMatch[1]) {
      if (this.gameProgressionService.gameProgress === "Tutorial") {
        let index = this.tutorialRoomService.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.tutorialRoomService.uItems.splice(index, 1);
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
      } else if (this.gameProgressionService.gameProgress === "Room 1") {
        let index = this.room1Service.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.room1Service.uItems.splice(index, 1);
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
        console.log(this.room1Service.uItems);
      } else if (this.gameProgressionService.gameProgress === "Room 2") {
        let index = this.room2Service.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.room2Service.uItems.splice(index, 1);
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
      } else if (this.gameProgressionService.gameProgress === "Room 3") {
        let index = this.room3Service.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.room3Service.uItems.splice(index, 1);
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
      }
      this.enterNextRoom();
      this.itemsToMatch = [];
      console.log("Items match");
    } else if (this.itemsToMatch[0] !== this.itemsToMatch[1]) {
      this.itemsToMatch = [];
      // console.log("Items do not match");
    }
  }
}
