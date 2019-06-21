import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Room2Service {
  items: any;
  uItems: any;
  isShowing: boolean = true;

  constructor(private http: HttpClient) { }
  getRoomTwoItems() {
    return this.http.get("/room-2-items", { responseType: "json" });
  }

  getRoomTwoUnlockItems() {
    return this.http.get("/room-2-unlock-items", { responseType: "json" });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  hidePrompt() {
    this.isShowing = false;
  }
}

