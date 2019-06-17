import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room3right',
  templateUrl: './room3right.component.html',
  styleUrls: ['./room3right.component.css']
})
export class Room3rightComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
