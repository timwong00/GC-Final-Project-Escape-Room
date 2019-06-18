import { Component, OnInit } from '@angular/core';
import { Room2Service } from "../room2.service";

@Component({
  selector: 'room2right',
  templateUrl: './room2right.component.html',
  styleUrls: ['./room2right.component.css']
})
export class Room2rightComponent implements OnInit {

  constructor(private room2Service: Room2Service) { }

  ngOnInit() {
  }

}
