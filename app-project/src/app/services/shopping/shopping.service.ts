import {  Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe/recipe.service';
import { Subject } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ShoppingService   {

   constructor( ) { }

    
   ingredientsChange = new Subject<Ingredient[]>()
   startedEditing =  new Subject<number>();
 
   private ingredients: Ingredient[] = [
      new Ingredient("apples", 5),
      new Ingredient("Tomatos", 3)
   ]


   getIngredients(): Ingredient[] {
      return this.ingredients.slice()
   }

   deleteIngredient() {
      this.ingredients.pop()
      this.ingredientsChange.next(this.ingredients.slice())
   }

   getIngredient(index:number): Ingredient{
      return this.ingredients[index];
   }
   addIngredient(ingredient: Ingredient) {


      this.ingredients.push(ingredient)
      this.ingredientsChange.next(this.ingredients.slice())
      console.log(this.ingredientsChange)
      console.log(this.ingredients )

      //necessario sempre  emitir um aviso pois a versao original 
      //provida no metodo getIngredient alterou
   }

   addIngredients(ingredients:Ingredient[]){
      this.ingredients.push(...ingredients)
      this.ingredientsChange.next(this.ingredients.slice())
      console.log(this.ingredientsChange)
      console.log(this.ingredients )

   }
}
