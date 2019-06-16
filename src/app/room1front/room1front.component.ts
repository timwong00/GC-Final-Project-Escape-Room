import { Component, OnInit } from "@angular/core";
import { ItemsService } from "../items.service";
import { TimerService } from "../timer.service";

@Component({
  selector: "room1front",
  templateUrl: "./room1front.component.html",
  styleUrls: ["./room1front.component.css"]
})
export class Room1frontComponent implements OnInit {
  items: any;

  constructor(
    private itemsService: ItemsService,
    private timerService: TimerService
  ) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(response => {
      this.items = response;
      console.log(this.items);
    });
  }

  startTimer(): void {
    this.timerService.startTimer();
  }

  stopTimer(): void {
    this.timerService.stopTimer();
  }
}
