import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

 constructor(private recipeService:RecipeService){}
 
  @Input() recipe: {
    name: string,
    description: string,
    imagePath: string
  }



  selectRecipe() {
    this.recipeService.recipe.emit(this.recipe);
  }


}
