import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Room1Service } from "./room1.service";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Room1frontComponent } from './room1front/room1front.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Room1leftComponent } from './room1left/room1left.component';
import { Room1rightComponent } from './room1right/room1right.component';
import { Room2frontComponent } from './room2front/room2front.component';
import { Room2leftComponent } from './room2left/room2left.component';
import { Room2rightComponent } from './room2right/room2right.component';
import { Room3frontComponent } from './room3front/room3front.component';
import { Room3leftComponent } from './room3left/room3left.component';
import { Room3rightComponent } from './room3right/room3right.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingPageComponent },
  { path: "room1front", component: Room1frontComponent },
  { path: "room1left", component: Room1leftComponent },
  { path: "room1right", component: Room1rightComponent },
  { path: "room2front", component: Room2frontComponent },
  { path: "room2left", component: Room2leftComponent },
  { path: "room2right", component: Room2rightComponent },
  { path: "room3front", component: Room3frontComponent },
  { path: "room3left", component: Room3leftComponent },
  { path: "room3right", component: Room3rightComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    Room1frontComponent,
    LandingPageComponent,
    Room1leftComponent,
    Room1rightComponent,
    Room2frontComponent,
    Room2leftComponent,
    Room2rightComponent,
    Room3frontComponent,
    Room3leftComponent,
    Room3rightComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Room1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
