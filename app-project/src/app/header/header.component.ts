import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() recipeOrshoppingList = new EventEmitter<boolean>();
  //false=recipe,true=shopping List

  recipe() {
    this.recipeOrshoppingList.emit(false)
  }

  shopping() {
    this.recipeOrshoppingList.emit(true)

  }
}
