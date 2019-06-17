import { Component, OnInit } from '@angular/core';
import { Room1Service } from "../room1.service";

@Component({
  selector: 'room1left',
  templateUrl: './room1left.component.html',
  styleUrls: ['./room1left.component.css']
})
export class Room1leftComponent implements OnInit {

  constructor(private room1Service: Room1Service) { }

  ngOnInit() {
  }

}
