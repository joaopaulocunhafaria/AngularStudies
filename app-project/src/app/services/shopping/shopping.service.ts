import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({
   providedIn: 'root'
})
export class ShoppingService   {

   constructor( ) { }

    
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
      console.log(this.ingredientsChange)
      console.log(this.ingredients )

      //necessario sempre  emitir um aviso pois a versao original 
      //provida no metodo getIngredient alterou
   }

   addIngredients(ingredients:Ingredient[]){
      this.ingredients.push(...ingredients)
      this.ingredientsChange.emit(this.ingredients.slice())
      console.log(this.ingredientsChange)
      console.log(this.ingredients )

   }
}
