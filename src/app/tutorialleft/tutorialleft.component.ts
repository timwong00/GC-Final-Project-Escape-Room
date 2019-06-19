import { Component, OnInit } from "@angular/core";
import { TutorialroomService } from "../tutorialroom.service";

@Component({
  selector: "tutorialleft",
  templateUrl: "./tutorialleft.component.html",
  styleUrls: ["./tutorialleft.component.css"]
})
export class TutorialleftComponent implements OnInit {
  unlockItems: any;
  constructor(private tutorialRoomService: TutorialroomService) {}

  ngOnInit() {
    this.tutorialRoomService.getTutorialUnlockItems().subscribe(response => {
      this.unlockItems = response;
      this.tutorialRoomService.setUnlockItems(response);
    });
  }
}
