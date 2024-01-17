import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {



  description: string;
  name: string;
  imageURL:string;

  recipes: Recipe[] = []

  addRecipe() {
   if (this.name == "" || this.description == "" || this.imageURL=="") {
      return            
    }
    this.recipes.push(new Recipe(this.name,this.description,this.imageURL))


  }


  deleteRecipe() {
   this.recipes.pop()

}
}
