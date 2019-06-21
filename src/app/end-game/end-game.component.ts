import { Component, OnInit } from '@angular/core';
import { TimerService } from "../timer.service";
import { GameProgressionService } from "../game-progression.service";

@Component({
  selector: 'end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.css']
})
export class EndGameComponent implements OnInit {
  gameProgress: string;
  gameLost: boolean = false;
  gameWon: boolean = false;

  constructor(
    private timerService: TimerService,
    private gameProgressionService: GameProgressionService
    ) { }

  ngOnInit() {
    this.gameProgress = this.gameProgressionService.getGameProgress();
    if (this.gameProgress == "Game Won") {
      this.gameWon = true;
    } else {
      this.gameLost = true;
    }
  }


  // endGame() {
  //   this.timerService.endGame();
  // }

  // gameOver() {
    
  // }

  

}
