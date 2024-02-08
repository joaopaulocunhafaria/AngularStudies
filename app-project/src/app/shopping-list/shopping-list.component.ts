import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shopppingService: ShoppingService) { }

  ingredients: Ingredient[];
  subscription: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shopppingService.getIngredients()
    this.subscription = this.shopppingService.ingredientsChange
      .subscribe(
        (ingredients: Ingredient[]) => { this.ingredients = ingredients }
      )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onEditItem(index:number){
    this.shopppingService.startedEditing.next(index);
  }

}


