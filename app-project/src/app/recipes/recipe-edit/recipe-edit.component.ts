import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {

  index:number;
  name: string;
  recipe: Recipe = new Recipe('', '', '', []);
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private router:Router,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.name = params["name"];
        this.index= this.recipeService.getIndex(this.name);
        this.editMode = params["name"] != null;
        this.initForm();
      }
    )
  }

  private initForm() {

    let ingredients: FormArray = new FormArray([]);

    if (this.editMode) {
      this.recipe = this.recipeService.finbByName(this.name)


      if (this.recipe.ingredients) {
        for (let i = 0; i < this.recipe.ingredients.length; i++) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(this.recipe.ingredients[i].name, Validators.required),
              'amount': new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })

          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe.name, Validators.required),
      'imagePath': new FormControl(this.recipe.imagePath, [Validators.required]),
      'description': new FormControl(this.recipe.description, Validators.required),
      'ingredients': ingredients
    })
  }

  onSubmite() {
     

    if (this.editMode) {
       this.recipeService.updateRecipe(this.index,this.recipeForm.value);
       console.log(this.recipeService.getRecipes());
       
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
 
    this.router.navigate(['recipes',this.name]);
 
  }

  getControls(): AbstractControl[] { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }


  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
      )
    )
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

  onCancel():void{
    this.router.navigate(['recipes',this.name]);
  }

}
