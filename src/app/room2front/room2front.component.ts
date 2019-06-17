import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room2front',
  templateUrl: './room2front.component.html',
  styleUrls: ['./room2front.component.css']
})
export class Room2frontComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
