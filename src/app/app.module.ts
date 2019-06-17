import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ItemsService } from "./items.service";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Room1frontComponent } from './room1front/room1front.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingPageComponent },
  { path: "room1front", component: Room1frontComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Room1frontComponent,
    LandingPageComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
