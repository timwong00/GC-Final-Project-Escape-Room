import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
items: any;
  constructor(private http: HttpClient) {

   
  
}

getItems() {
  return this.http.get("/items", { responseType: "json"});
}

}