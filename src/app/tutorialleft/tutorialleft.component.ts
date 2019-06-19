import { Component, OnInit } from '@angular/core';
import { TutorialroomService } from "../tutorialroom.service";


@Component({
  selector: 'tutorialleft',
  templateUrl: './tutorialleft.component.html',
  styleUrls: ['./tutorialleft.component.css']
})
export class TutorialleftComponent implements OnInit {

  constructor(private tutorialRoomService: TutorialroomService) { }

  ngOnInit() {
  }

}
