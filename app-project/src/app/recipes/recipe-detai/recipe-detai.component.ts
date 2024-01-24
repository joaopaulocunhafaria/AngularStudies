import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-detai',
  templateUrl: './recipe-detai.component.html',
  styleUrl: './recipe-detai.component.css'
})
export class RecipeDetaiComponent {


  constructor(private recipeService: RecipeService) { }

  @Input() recipe: Recipe;

  showDropDown: boolean = false;

  onAddToShoppingList() {
     this.recipeService.onAddToShoppingList(this.recipe.ingredients)
  }

}
