import { Component, OnInit, Input } from '@angular/core';
import { Room1Service } from "../room1.service";
import { GameProgressionService } from "../game-progression.service";

@Component({
  selector: "room1front",
  templateUrl: "./room1front.component.html",
  styleUrls: ["./room1front.component.css"]
})
export class Room1frontComponent implements OnInit {
  items: any;
  unlockItems: any;
  selectedItems: any[];
  itemsToMatch: any[] = [];
  isShowing: boolean = false;
  gameProgress: string;
  constructor(
    private gameProgressionService: GameProgressionService,
    private room1Service: Room1Service,
  ) {}

  ngOnInit() {
    this.room1Service.getItems().subscribe(response => {
      this.items = response;
        // console.log(this.items);
        this.room1Service.setItems(response);
    });
    this.room1Service.getUnlockItems().subscribe(response => {
      this.unlockItems = response;
      // console.log(this.unlockItems);
      this.room1Service.setUnlockItems(response);
    });
    this.selectedItems = this.room1Service.selectedItems;
    this.itemsToMatch = this.room1Service.itemsToMatch;
    // console.log(this.selectedItems);
  }

  selectItem(selectedItem) {
    // console.log(selectedItem);
    this.room1Service.collectItem(selectedItem);
  }

  removeItem(index: number) {
    this.room1Service.deleteItem(index);
    // console.log(index);
  }

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

  // need to set game progress when advancing to next level
  setGameProgress(): void {
    this.gameProgressionService.setGameProgress(this.gameProgress);
  }
  matchItems1(clickedItem1) {
    // this.room1Service.checkMatch(clickedItem1);
    console.log(clickedItem1);
    this.itemsToMatch.splice(0, 1, clickedItem1);
  }

  matchItems2(clickedItem2) {
    console.log(clickedItem2);
    this.itemsToMatch.splice(1, 1, clickedItem2);
    // console.log(this.itemsToMatch);
    this.room1Service.checkMatch(this.itemsToMatch);

  }

}
