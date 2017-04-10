import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-recipe-edit',
  templateUrl: 'editRecipe.component.html',
  providers: [ RecipeService ]
})

export class EditRecipeComponent {
  // recipes: Recipe[];
  // errorMessage: string;

  // constructor (private recipeService: RecipeService, private router: Router) {}

  // ngOnInit() {
  //     this.getRecipes();
  //   }

  // getRecipes() {
  // this.recipeService.getRecipes()
  // .then(
  //   recipes => this.recipes = recipes,
  //   error => this.errorMessage = <any>error);
  // }

  // addRecipe (id: number, name: string, category: string, photo: string, ingredients: string, steps: string) {
  //     if (!name) { return; }
  //     this.recipeService.addRecipe(id, name, category, photo, ingredients, steps)
  //       .then(
  //           recipe  => this.recipes.push(recipe),
  //           error =>  this.errorMessage = <any>error);
  //     }
}