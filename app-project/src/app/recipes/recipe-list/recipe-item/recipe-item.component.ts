import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  @Output() onSelectRecipe = new EventEmitter<void>();

  @Input() recipe: {
    name: string,
    description: string,
    imagePath: string
  }



  selectRecipe() {
    this.onSelectRecipe.emit()
  }


}
