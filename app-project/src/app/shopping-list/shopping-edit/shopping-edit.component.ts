import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

   @ViewChild('nameInput', {static:false}) nameInput:ElementRef
 
   @ViewChild('amountInput', {static:false}) amountInput:ElementRef
 
  @Output() addIngredient = new EventEmitter<Ingredient>()

  @Output() deleteIngredient = new EventEmitter<void>()



  onAddIngridient() {
     const ingName = this.nameInput.nativeElement.value;
     const ingAmount = this.amountInput.nativeElement.value;
     
     const ingredient = new Ingredient(ingName,ingAmount)

    this.addIngredient.emit(ingredient)
 
  }

  onDelete(){
    this.deleteIngredient.emit()
  }

}
