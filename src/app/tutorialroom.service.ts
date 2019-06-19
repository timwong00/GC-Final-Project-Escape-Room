import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialroomService {
  items: any;
  uItems: any;
  
  constructor(private http: HttpClient) { }
  getItems() {
    return this.http.get("/tutorial-items", { responseType: "json" });
  }

  getUnlockItems() {
    return this.http.get("/tutorial-unlock-items", { responseType: "json" });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }
}
