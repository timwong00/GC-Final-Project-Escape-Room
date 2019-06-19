import { Component, OnInit } from "@angular/core";
import { TutorialroomService } from "../tutorialroom.service";
import { InventoryService } from "../inventory.service";

@Component({
  selector: "tutorialright",
  templateUrl: "./tutorialright.component.html",
  styleUrls: ["./tutorialright.component.css"]
})
export class TutorialrightComponent implements OnInit {
  items: any;
  constructor(
    private tutorialRoomService: TutorialroomService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    // this.tutorialRoomService.getTutorialItems().subscribe(response => {
    //   this.items = response[0]; // only works because we only have 1 item in the array
    //   this.inventoryService.setItems(response);
    //   // console.log(response[0]);
    // });
    this.items = this.tutorialRoomService.items;

    // console.log(this.items);
  }

  selectItem(inventoryItem) {
    // console.log(inventoryItem);
    // console.log("Match item name:", inventoryItem.match_item_name);
    this.inventoryService.collectItem(inventoryItem);
  }

  removeItem(itemName) {
    this.tutorialRoomService.deleteItem(itemName);
    // console.log(itemName);
    // console.log(index);
  }
}
