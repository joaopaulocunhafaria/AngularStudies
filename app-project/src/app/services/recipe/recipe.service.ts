import { Injectable } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingService: ShoppingService) { }

  showDetail: boolean = true;


  recipes: Recipe[] = [{
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
    ingredients: [{ name: "lettuce", amount: 4 }]
  }]


  addRecipe(name: string, description: string, imageURL: string) {
    if (name == '' || description == '' || imageURL == '') {
      return
    }

    this.recipes.push(new Recipe(name, description, imageURL, []))
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  finbByName(name: string): Recipe {
    return this.recipes.find(
      Recipe => Recipe.name == name
    )
  }

}
