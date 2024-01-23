import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable({
   providedIn: 'root'
})
export class ShoppingService {

   constructor() { }
   ingredientsChange = new EventEmitter<Ingredient[]>()
   private ingredients: Ingredient[] = [
      new Ingredient("apples", 5),
      new Ingredient("Tomatos", 3)
   ]


   getIngredients(): Ingredient[] {
      return this.ingredients.slice()
   }

   deleteIngredient() {
      this.ingredients.pop()
      this.ingredientsChange.emit(this.ingredients.slice())
   }

   addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient)
      this.ingredientsChange.emit(this.ingredients.slice())
      //necessario sempre  emitir um aviso pois a versao original 
      //provida no metodo getIngredient alterou
   }
}
