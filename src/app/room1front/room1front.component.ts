import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'room1front',
  templateUrl: './room1front.component.html',
  styleUrls: ['./room1front.component.css']
})
export class Room1frontComponent implements OnInit {

  items: any;
  selectedItems: any[];
  isShowing: boolean = false;

  constructor(private itemsService: ItemsService) {
   }

  ngOnInit() {
    this.itemsService.getItems().subscribe(response => {
      this.items = response;
        // console.log(this.items);
    });
    this.selectedItems = this.itemsService.selectedItems;
    // console.log(this.selectedItems);
  }

  selectItem(selectedItem) {
    // console.log(selectedItem);
    this.itemsService.collectItem(selectedItem);
  }

  // removeItem(index: number) {
  //   this.itemsService.deleteItem(index);
  //   console.log(index);
  // }

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

}



