import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RecipeDetaiComponent } from './recipes/recipe-detai/recipe-detai.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { BestHighlightDirective } from './directives/best-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { DropDownDirective } from './shared/drop-down.directive';
import { RecipeService } from './services/recipe/recipe.service';
import { ShoppingService } from './services/shopping/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetaiComponent,
    RecipeItemComponent,
    RecipesComponent,
    BestHighlightDirective,
    UnlessDirective,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [RecipeService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
