import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "room-navigation",
  templateUrl: "./room-navigation.component.html",
  styleUrls: ["./room-navigation.component.css"]
})
export class RoomNavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateLeft() {
    this.router.navigate(["/room1left"]);
  }

  navigateFront() {
    this.router.navigate(["/room1front"]);
  }

  navigateRight() {
    this.router.navigate(["/room1right"]);
  }
}
