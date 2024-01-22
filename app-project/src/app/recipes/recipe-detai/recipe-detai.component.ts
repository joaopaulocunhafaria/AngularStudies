import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detai',
  templateUrl: './recipe-detai.component.html',
  styleUrl: './recipe-detai.component.css'
})
export class RecipeDetaiComponent {

   @Input() recipe:Recipe



}
