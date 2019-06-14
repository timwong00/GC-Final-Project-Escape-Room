import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ItemsService } from "./items.service";

import { AppComponent } from './app.component';
import { Room1frontComponent } from './room1front/room1front.component';

@NgModule({
  declarations: [
    AppComponent,
    Room1frontComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
