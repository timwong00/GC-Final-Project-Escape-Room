import { Component, OnInit } from '@angular/core';
import { Room2Service } from "../room2.service";

@Component({
  selector: 'room2front',
  templateUrl: './room2front.component.html',
  styleUrls: ['./room2front.component.css']
})
export class Room2frontComponent implements OnInit {

  constructor(private room2Service: Room2Service) { }

  ngOnInit() {
  }

}
