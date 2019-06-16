import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  isShowing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.isShowing = !this.isShowing;
  }

}
