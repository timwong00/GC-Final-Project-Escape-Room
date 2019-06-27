import { Component, OnInit } from "@angular/core";
import { TutorialroomService } from "../tutorialroom.service";
import { MatchService } from "../match.service";

@Component({
  selector: "tutorialleft",
  templateUrl: "./tutorialleft.component.html",
  styleUrls: ["./tutorialleft.component.css"]
})
export class TutorialleftComponent implements OnInit {
  unlockItems: any;
  x: any;
  y: any;
  constructor(
    private tutorialRoomService: TutorialroomService,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    // this.tutorialRoomService.getTutorialUnlockItems().subscribe(response => {
    //   this.unlockItems = response;
    //   this.tutorialRoomService.setUnlockItems(response);
    // });
    this.unlockItems = this.tutorialRoomService.uItems;
  }

  matchItems2(itemToUnlock) {
    this.matchService.setUnlockItemToMatch(itemToUnlock);
    this.matchService.checkMatch();
  }

  showUnlockHint(i) {
    this.tutorialRoomService.showUnlockItemHint(i);
  }

  hideUnlockHint(i) {
    this.tutorialRoomService.hideUnlockItemHint(i);
  }

  flashlightCursor(mouseEvent) {
    this.x = mouseEvent.clientX;
    this.y = mouseEvent.clientY;
    if (typeof this.x !== undefined) {
      return this.x, this.y;
    }
  }

  isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
}
