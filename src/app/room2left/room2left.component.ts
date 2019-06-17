import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room2left',
  templateUrl: './room2left.component.html',
  styleUrls: ['./room2left.component.css']
})
export class Room2leftComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
