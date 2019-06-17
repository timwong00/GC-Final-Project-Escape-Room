import { Component, OnInit } from "@angular/core";
import { TimerService } from "../timer.service";

@Component({
  selector: "headerComponent",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private timerService: TimerService) {}

  ngOnInit() {}

  startTimer(): void {
    this.timerService.startTimer();
  }

  stopTimer(): void {
    this.timerService.stopTimer();
  }
}
