import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }
   
   showDetail:boolean=true;
   recipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [{
    name: "apple",
    description: 'fresh apples',
    imagePath: "https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_960_720.jpg"
  }, {
    name: "salmon",
    description: 'ocean salmon',
    imagePath: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"
  }, {
    name: "vegetables",
    description: 'green vegetables',
    imagePath: "https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999_960_720.jpg"
  }]


  addRecipe(name: string, description: string, imageURL: string) {
    if (name == '' || description == '' || imageURL == '') {
      return
    }

    this.recipes.push(new Recipe(name, description, imageURL))
  }
  

 
}
