import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {

  name: string;
  recipe:Recipe = new  Recipe('','','',[]);
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private router: ActivatedRoute, private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        this.name = params["name"];
        this.editMode = params["name"] != null;
        this.initForm();
      }
    )
  }

 private initForm(){
       
   if (this.editMode) {
      this.recipe = this.recipeService.finbByName(this.name)
   }

  this.recipeForm = new FormGroup({
    'name': new FormControl(this.recipe.name,Validators.required),
    'imagePath': new FormControl(this.recipe.imagePath,[Validators.required]),
    'description': new FormControl (this.recipe.description,Validators.required),
    'ingredients': new   FormArray([])
  })
 }

}
