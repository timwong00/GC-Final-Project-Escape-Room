import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: any;
  selectedItems: any[] = [];

  constructor(private http: HttpClient) {
  }

  getItems() {
    return this.http.get("/items", { responseType: "json" });
  }

  collectItem(selectedItem) {
    this.selectedItems.push(selectedItem);
    // console.log(this.selectedItems);
    return this.selectedItems; 
  }

  // deleteItem(index: number) {
  //   this.items.splice(index, 1);
  //   return this.items;
  //   console.log(index);
  //   console.log(this.items);
  // }


}