import { RouterModule, Routes } from "@angular/router"; 
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeDetaiComponent } from "./recipes/recipe-detai/recipe-detai.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

//importante ficar atento a ordem das rotas, pra saber
//quais tem prioridade
const appRoutes:Routes=[
  {path:"",redirectTo:"/recipes"},
  {path:"recipes",component:RecipesComponent, children:[
    {path:"", component:RecipeStartComponent},
    {path:"new", component:RecipeEditComponent},
    {path:":name", component:RecipeDetaiComponent},
    {path:":name/edit", component:RecipeEditComponent},
  ]},
  {path:"shopping-list", component: ShoppingListComponent}
 ]



@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class appRoutingModule {

}