import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room2right',
  templateUrl: './room2right.component.html',
  styleUrls: ['./room2right.component.css']
})
export class Room2rightComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
