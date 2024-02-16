import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy {

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  recipes: Recipe[];
  subscrition: Subscription;

  ngOnInit(): void {
    this.subscrition = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
  this.subscrition.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route })
  }

}
