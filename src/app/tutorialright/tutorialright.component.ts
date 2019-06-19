import { Component, OnInit } from '@angular/core';
import { TutorialroomService } from "../tutorialroom.service";


@Component({
  selector: 'tutorialright',
  templateUrl: './tutorialright.component.html',
  styleUrls: ['./tutorialright.component.css']
})
export class TutorialrightComponent implements OnInit {

  constructor(private tutorialRoomService: TutorialroomService) { }

  ngOnInit() {
  }

}
