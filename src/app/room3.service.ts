import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Room3Service {
  items: any;
  uItems: any;
  
  constructor(private http: HttpClient) { }
  getRoomThreeItems() {
    return this.http.get("/room-3-items", { responseType: "json" });
  }

  getRoomThreeUnlockItems() {
    return this.http.get("/room-3-unlock-items", { responseType: "json" });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }
}
