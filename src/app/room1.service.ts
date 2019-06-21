import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { GameProgressionService } from "../app/game-progression.service";
// import { TimerService } from "../app/timer.service";
// import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class Room1Service {
  items: any;
  uItems: any;
  isShowing: boolean = true;
  // timeRemaining: number;
  itemsToMatch: any[] = [];

  constructor(
    private http: HttpClient,
    // private gameProgressionService: GameProgressionService,
    // private timerService: TimerService,
    // private router: Router
    ) {}

  getRoomOneItems() {
    return this.http.get("/room-1-items", { responseType: "json" });
  }

  getRoomOneUnlockItems() {
    return this.http.get("/room-1-unlock-items", { responseType: "json" });
  }

  setUnlockItems(uItemList) {
    this.uItems = uItemList;
  }

  deleteItem(index) {
    // let index = this.items.findIndex(
    //   item => item.item_name == itemName.item_name
    // );
    this.items.splice(index, 1);
    // return this.items;
    // console.log(this.items);
    // console.log(index);
  }

  setItems(itemList) {
    this.items = itemList;
    // console.log(this.items);
  }

  hasItems() {
    return this.items;
  }

  hasUnlockItems() {
    return this.uItems;
  }

  hidePrompt() {
    this.isShowing = false;
  }

  // endGame() {
  //   console.log(this.timerService.timeRemaining);
  //   if (this.timerService.timeRemaining = 280) {
  //     // console.log("end game");
  //     this.router.navigate(["/endgame"]);
  //     this.gameProgressionService.setGameProgress("Game Lost");
  //   } else {
  //     return;
  //   }
  // }

}
