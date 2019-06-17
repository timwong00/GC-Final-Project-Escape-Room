import { Component, OnInit } from '@angular/core';
import { Room3Service } from "../room3.service";

@Component({
  selector: 'room3front',
  templateUrl: './room3front.component.html',
  styleUrls: ['./room3front.component.css']
})
export class Room3frontComponent implements OnInit {

  constructor(private room3Service: Room3Service) { }

  ngOnInit() {
  }

}
