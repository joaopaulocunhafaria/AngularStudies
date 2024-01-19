import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  games= []

  addGame(number:{num:number}) {
       this.games.push(number.num)
  }

  delteGame() {
     this.games=[]
  }
    
}
