import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../services/shopping/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  @ViewChild("f") slForm:NgForm;
  subscription:Subscription;
  editMode:boolean=false;
  editItemIndex: number;
  editIngredient: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.subscription=this.shoppingService.startedEditing.subscribe(
      (index: number) => {
           this.editItemIndex=index;
           this.editMode=true;
           this.editIngredient=this.shoppingService.getIngredient(this.editItemIndex);
           this.slForm.setValue({
            name:this.editIngredient.name,
            amount:this.editIngredient.amount
           })
      
          }
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  onAddItem(form: NgForm) {
    const value = form.value
    const ingredient = new Ingredient(value.name, value.amount)
    this.editMode===true?this.shoppingService.editIngredient(this.editItemIndex,ingredient):this.shoppingService.addIngredient(ingredient)
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.onClear()
  }

}
