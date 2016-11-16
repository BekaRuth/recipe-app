import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { EditRecipeComponent } from './editRecipe.component';
// import { RecipeDetailComponent } from './recipeDetail.component';
// import { RecipeListComponent } from './recipeList.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
  AppRoutingModule ],
  declarations: [ AppComponent, routedComponents ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
