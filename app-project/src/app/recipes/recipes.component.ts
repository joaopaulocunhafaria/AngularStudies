import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "../services/recipe/recipe.service";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
   })

export class RecipesComponent implements OnInit{
 
    recipeToShow:Recipe;

    constructor(private recipeService: RecipeService) { }
    
    ngOnInit(){
        this.recipeService.recipe.subscribe(
            (recipe:Recipe)=>{this.recipeToShow=recipe}
            )
           
    }

}