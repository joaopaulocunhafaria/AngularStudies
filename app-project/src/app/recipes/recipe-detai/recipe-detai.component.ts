import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detai',
  templateUrl: './recipe-detai.component.html',
  styleUrl: './recipe-detai.component.css'
})
export class RecipeDetaiComponent implements OnInit {


  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

   recipe: Recipe;
  
  ngOnInit(): void {
 
    this.route.params.subscribe(
        (params:Params)=>{
          this.recipe = this.recipeService.finbByName(params["name"])
        }
      )
  }

  showDropDown: boolean = false;

  onAddToShoppingList() {
     this.recipeService.onAddToShoppingList(this.recipe.ingredients)
  }

}
