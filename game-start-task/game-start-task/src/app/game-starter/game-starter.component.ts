import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-starter',
  templateUrl: './game-starter.component.html',
  styleUrl: './game-starter.component.css'
})
export class GameStarterComponent {



  @Output() onDeleteGames = new EventEmitter<{ }>()
  @Output() onGameCreated = new EventEmitter<{ num: number }>()
  counter: number = 0;
  ref;
  
  onAddGame() {
     this.ref=setInterval(()=>{
      this.counter++;
      this.onGameCreated.emit({ num: this.counter });
      console.log(this.counter)
     },1000)
  }

  onStopGame() {
 
     clearInterval(this.ref);

  }

  deleteGames() {
    this.onDeleteGames.emit({})  
  }
}
