import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room3front',
  templateUrl: './room3front.component.html',
  styleUrls: ['./room3front.component.css']
})
export class Room3frontComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
