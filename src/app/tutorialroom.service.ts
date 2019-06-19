import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialroomService {
  uItems: any;
  items: any;


  constructor(private http: HttpClient) { }
  getTutorialItems() {
    return this.http.get("/tutorial-items", { responseType: "json" });
  }

  getTutorialUnlockItems() {
    return this.http.get("/tutorial-unlock-items", { responseType: "json" });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }
}
