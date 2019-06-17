import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room1left',
  templateUrl: './room1left.component.html',
  styleUrls: ['./room1left.component.css']
})
export class Room1leftComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
