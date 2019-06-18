import { Component, OnInit, Input } from "@angular/core";

import { ItemsService } from "../items.service";
import { GameProgressionService } from "../game-progression.service";

@Component({
  selector: "room1front",
  templateUrl: "./room1front.component.html",
  styleUrls: ["./room1front.component.css"]
})
export class Room1frontComponent implements OnInit {
  items: any;
  selectedItems: any[];
  isShowing: boolean = false;
  gameProgress: string;
  constructor(
    private itemsService: ItemsService,
    private gameProgressionService: GameProgressionService
  ) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(response => {
      this.items = response;
      this.itemsService.setItems(response);
      console.log(this.items);
    });
    this.selectedItems = this.itemsService.selectedItems;
    // console.log(this.selectedItems);
  }

  selectItem(selectedItem) {
    // console.log(selectedItem);
    this.itemsService.collectItem(selectedItem);
  }

  removeItem(index: number) {
    this.itemsService.deleteItem(index);
    console.log(index);
  }

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

  // need to set game progress when advancing to next level
  setGameProgress(): void {
    this.gameProgressionService.setGameProgress(this.gameProgress);
  }
}
