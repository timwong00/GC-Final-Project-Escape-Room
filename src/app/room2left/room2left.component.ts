import { Component, OnInit } from '@angular/core';
import { Room2Service } from "../room2.service";

@Component({
  selector: 'room2left',
  templateUrl: './room2left.component.html',
  styleUrls: ['./room2left.component.css']
})
export class Room2leftComponent implements OnInit {

  constructor(private room2Service: Room2Service) { }

  ngOnInit() {
  }

}
