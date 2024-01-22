import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  @Output() onPassingRecipe = new EventEmitter<Recipe>();

  description: string = '';
  name: string = '';
  imageURL: string = '';

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

  addRecipe() {
    if (this.name == '' || this.description == '' || this.imageURL == '') {
      return
    }
    //else if(this.recipes.some(obj => onrejectionhandled.name==this.name)){
    //   console.log("Ja existe um elemento com este nome")
    //   return
    // }

    this.recipes.push(new Recipe(this.name, this.description, this.imageURL))


  }



  passingRecipe(recipe: Recipe) {

    this.onPassingRecipe.emit(recipe)

  }
}
