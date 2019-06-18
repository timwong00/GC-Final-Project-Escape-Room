import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Room2Service {

  constructor(private http: HttpClient) { }
  getItems() {
    return this.http.get("/room-2-items", { responseType: "json" });
  }

  getUnlockItems() {
    return this.http.get("/room-2-unlock-items", { responseType: "json" });
  }
}

