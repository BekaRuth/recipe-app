import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipeList.component';
import { EditRecipeComponent } from './editRecipe.component';
import { RecipeDetailComponent } from './recipeDetail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'detail/:id',
    component: RecipeDetailComponent
  },
  {
    path: 'edit/:id',
    component: EditRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [RecipeListComponent, EditRecipeComponent, RecipeDetailComponent];