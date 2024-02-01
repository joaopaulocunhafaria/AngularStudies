import { RouterModule, Routes } from "@angular/router"; 
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeDetaiComponent } from "./recipes/recipe-detai/recipe-detai.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";


const appRoutes:Routes=[
  {path:"",component:RecipesComponent},
  {path:"recipes",component:RecipesComponent, children:[
    {path:"", component:RecipeStartComponent},
    {path:":name", component:RecipeDetaiComponent}
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