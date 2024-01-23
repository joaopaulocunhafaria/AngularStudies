import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

constructor(private recipeService:RecipeService){}
 
  description: string = '';
  name: string = '';
  imageURL: string = '';

  recipes: Recipe[] = this.recipeService.recipes

  addRecipe() {
      this.recipeService.addRecipe(this.name,this.description,this.imageURL)
  }


 
}
