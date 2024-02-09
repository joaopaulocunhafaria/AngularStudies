import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route:ActivatedRoute) { }
 
  recipes: Recipe[] = this.recipeService.recipes

   

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route })
  }

}
