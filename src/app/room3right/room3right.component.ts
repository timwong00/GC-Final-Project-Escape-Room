import { Component, OnInit } from '@angular/core';
import { Room3Service } from "../room3.service";

@Component({
  selector: 'room3right',
  templateUrl: './room3right.component.html',
  styleUrls: ['./room3right.component.css']
})
export class Room3rightComponent implements OnInit {

  constructor(private room3Service: Room3Service) { }

  ngOnInit() {
  }

}
