import { Component, OnInit } from "@angular/core";
import { TutorialroomService } from "../tutorialroom.service";
import { GameProgressionService } from "../game-progression.service";
import { MatchService } from "../match.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: "tutorialfront",
  templateUrl: "./tutorialfront.component.html",
  styleUrls: ["./tutorialfront.component.css"]
})
export class TutorialfrontComponent implements OnInit {
  items: any;
  unlockItems: any;
  inventoryItems: any[];
  itemsToMatch: any[] = [];
  gameProgress: string;
  // isShowing: boolean = true;

  constructor(
    public tutorialRoomService: TutorialroomService,
    public gameProgressionService: GameProgressionService,
    public matchService: MatchService,
    public inventoryService: InventoryService
  ) {}

  ngOnInit() {
    if (this.tutorialRoomService.items == undefined) {
      this.tutorialRoomService.getTutorialItems().subscribe(response => {
        // this.items = response;
        this.tutorialRoomService.setItems(response);
        this.items = this.tutorialRoomService.items;
      });
    } else {
      this.items = this.tutorialRoomService.items;
    }
    if (this.tutorialRoomService.uItems == undefined) {
      this.tutorialRoomService.getTutorialUnlockItems().subscribe(response => {
        // this.unlockItems = response;
        this.tutorialRoomService.setUnlockItems(response);
        this.unlockItems = this.tutorialRoomService.uItems;
      });
    } else {
      this.unlockItems = this.tutorialRoomService.uItems;
    }
    // this.itemsToMatch = this.matchService.itemsToMatch;
  }

  selectItem(inventoryItem) {
    // console.log("Match item name:", inventoryItem.match_item_name);
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(index: number) {
    this.inventoryService.deleteItem(index);
    // console.log(index);
  }

  // toggleShow() {
  //   this.isShowing = !this.isShowing;
  // }

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
    this.tutorialRoomService.hidePrompt();
  }
}
