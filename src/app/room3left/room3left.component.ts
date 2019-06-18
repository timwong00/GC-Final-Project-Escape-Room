import { Component, OnInit } from '@angular/core';
import { Room3Service } from "../room3.service";

@Component({
  selector: 'room3left',
  templateUrl: './room3left.component.html',
  styleUrls: ['./room3left.component.css']
})
export class Room3leftComponent implements OnInit {

  constructor(private room3Service: Room3Service) { }

  ngOnInit() {
  }

}
