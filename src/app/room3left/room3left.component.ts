import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room3left',
  templateUrl: './room3left.component.html',
  styleUrls: ['./room3left.component.css']
})
export class Room3leftComponent implements OnInit {

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
