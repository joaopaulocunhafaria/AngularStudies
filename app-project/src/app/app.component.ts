
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipeOrShopping: boolean=false;

  switch(answ: boolean) {
    this.recipeOrShopping = answ;
  }
}