import { Component, OnInit } from '@angular/core';
import { Room1Service } from "../room1.service";

@Component({
  selector: 'room1right',
  templateUrl: './room1right.component.html',
  styleUrls: ['./room1right.component.css']
})
export class Room1rightComponent implements OnInit {

  constructor(private room1Service: Room1Service) { }

  ngOnInit() {
  }

}
