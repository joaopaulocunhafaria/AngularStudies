import { Injectable } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingService: ShoppingService) { }

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [{
    name: "APPLE",
    description: 'Fresh Apples',
    imagePath: "https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_960_720.jpg",
    ingredients: [
      { name: "Trigo", amount: 3 }
    ]
  }, {
    name: "salmon",
    description: 'ocean salmon',
    imagePath: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    ingredients: [{ name: "fish", amount: 3 }]
  }, {
    name: "vegetables",
    description: 'green vegetables',
    imagePath: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg",
    ingredients: [{ name: "lettuce", amount: 4 }, { name: "lettuce", amount: 4 }, { name: "lettuce", amount: 4 }, { name: "lettuce", amount: 4 }]
  }]

  getRecipes(): Recipe[] {
    return this.recipes.slice()
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  finbByName(name: string): Recipe {
    return this.recipes.find(
      Recipe => Recipe.name == name
    )
  }

  getIndex(name: string) {
    let recipeAux = this.finbByName(name);
    return this.recipes.indexOf(recipeAux);
  }


  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(
      this.recipes.slice()
    );

  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(
      this.recipes.slice()
    );
  }
}
