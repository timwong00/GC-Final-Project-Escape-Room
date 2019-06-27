import { Injectable } from "@angular/core";
import { Room1Service } from "./room1.service";
import { Room2Service } from "./room2.service";
import { Room3Service } from "./room3.service";
import { InventoryService } from "./inventory.service";
import { GameProgressionService } from "./game-progression.service";
import { Router } from "@angular/router";
import { TutorialroomService } from "./tutorialroom.service";
import { TimerService } from "./timer.service";
import { SoundeffectService } from "./soundeffect.service";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  items: any;
  uItems: any;
  itemsToMatch: any[] = [];
  inventoryItems: any[] = [];
  gameProgress: any;
  selected: boolean = false;
  notAMatch: boolean = false;

  constructor(
    private room1Service: Room1Service,
    private room2Service: Room2Service,
    private room3Service: Room3Service,
    private inventoryService: InventoryService,
    private gameProgressionService: GameProgressionService,
    private tutorialRoomService: TutorialroomService,
    private router: Router,
    private timerService: TimerService,
    private soundEffectService: SoundeffectService
  ) {}

  setInventoryItemToMatch(inventoryItem) {
    // if selected can use to unlock if not selected cant unlock/hint will pop up
    if (this.selected === false) {
      this.itemsToMatch.splice(0, 1, inventoryItem);
      this.selected = true;
      // console.log(this.itemsToMatch);
    } else if (this.selected === true) {
      this.itemsToMatch = [];
      this.selected = false;
      // console.log("else", this.itemsToMatch);
    }
  }

  setUnlockItemToMatch(unlockItem) {
    if (this.itemsToMatch !== []) {
      this.itemsToMatch.splice(1, 1, unlockItem);
    }
  }

  enterNextRoom() {
    if (this.gameProgressionService.gameProgress === "Tutorial") {
      if (
        this.itemsToMatch[0] == "wrist strap" &&
        this.itemsToMatch[1] == "wrist strap"
      ) {
        this.router.navigate(["/room1front"]);
        this.timerService.startTimer();
        this.gameProgressionService.playGame();
        this.gameProgressionService.setGameProgress("Room 1");
        this.gameProgressionService.navigateDirection = "front";
      }
    } else if (this.gameProgressionService.gameProgress === "Room 1") {
      if (this.itemsToMatch[0] == "door" && this.itemsToMatch[1] == "door") {
        this.router.navigate(["/room2front"]);
        this.gameProgressionService.setGameProgress("Room 2");
        this.gameProgressionService.navigateDirection = "front";
      }
    } else if (this.gameProgressionService.gameProgress === "Room 2") {
      if (
        this.itemsToMatch[0] == "badge scanner" &&
        this.itemsToMatch[1] == "badge scanner"
      ) {
        this.router.navigate(["/room3front"]);
        this.gameProgressionService.setGameProgress("Room 3");
        this.gameProgressionService.navigateDirection = "front";
      }
    } else if (this.gameProgressionService.gameProgress === "Room 3") {
      if (this.itemsToMatch[0] == "door" && this.itemsToMatch[1] == "door") {
        this.router.navigate(["/endgame"]);
        this.gameProgressionService.setGameProgress("Game Won");
        // this.soundEffectService.stopCreepyAmbient();
        // this.soundEffectService.stopHeartbeat();
      }
    }
  }

  checkMatch() {
    if (this.itemsToMatch[0] == this.itemsToMatch[1]) {
      if (this.gameProgressionService.gameProgress === "Tutorial") {
        let index = this.tutorialRoomService.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.tutorialRoomService.uItems[index].collected = true;
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
      } else if (this.gameProgressionService.gameProgress === "Room 1") {
        let index = this.room1Service.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.room1Service.uItems[index].collected = true;
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
      } else if (this.gameProgressionService.gameProgress === "Room 2") {
        let index = this.room2Service.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.room2Service.uItems[index].collected = true;
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
      } else if (this.gameProgressionService.gameProgress === "Room 3") {
        let index = this.room3Service.uItems.findIndex(
          item => item.item_name == this.itemsToMatch[1]
        );
        this.room3Service.uItems[index].collected = true;
        let index2 = this.inventoryService.inventoryItems.findIndex(
          item => item.match_item_name == this.itemsToMatch[0]
        );
        this.inventoryService.inventoryItems.splice(index2, 1);
      }
      if (
        this.itemsToMatch[0] == "glass case" &&
        this.itemsToMatch[1] == "glass case"
      ) {
        this.soundEffectService.playGlassBreak();
      }
      this.enterNextRoom();
      this.itemsToMatch = [];
      this.selected = false;
      // console.log("Items match");
    } else if (this.itemsToMatch[0] !== this.itemsToMatch[1]) {
      if (this.itemsToMatch.length == 2) {
        this.notAMatch = true;
      } else {
        return
      }
      this.itemsToMatch = [];
      this.selected = false;

      // console.log("Items do not match");
    }
  }

  hideNoMatch() {
    this.notAMatch = false;
  }
}
