import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../services/shopping/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  constructor(private shoppingService: ShoppingService) { }

  @ViewChild('nameInput', { static: false }) nameInput: ElementRef

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef


  onAddIngridient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;

    const ingredient = new Ingredient(ingName, ingAmount)

    this.shoppingService.addIngredient(ingredient);

  }

  onDelete() {
    this.shoppingService.deleteIngredient()
  }

}
