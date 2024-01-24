import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  })
export class ShoppingListComponent implements OnInit {

  constructor(private shopppingService: ShoppingService) {

  }

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shopppingService.getIngredients()
    this.shopppingService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) => {this.ingredients = ingredients}
      )
  }


}
