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
  constructor(private tutorialRoomService: TutorialroomService) {}

  ngOnInit() {
    this.tutorialRoomService.getTutorialItems().subscribe(response => {
      this.items = response;
      // this.inventoryService.setItems(response);
      console.log(this.items);
    });
  }
}
