import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room1right',
  templateUrl: './room1right.component.html',
  styleUrls: ['./room1right.component.css']
})
export class Room1rightComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
