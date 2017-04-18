import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';
import {FilterPipe} from './pipes'

@Component({
  moduleId: module.id,
  selector: 'my-recipe-list',
  templateUrl: 'recipeList.component.html',
  providers: [ RecipeService ]
})

export class RecipeListComponent implements OnInit {
  errorMessage: string;
  recipes: Recipe[];

  constructor (private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes()
    .then(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error);
  }

  addRecipe (name:string) {
    if (!name) {return;}
    this.recipeService.addRecipe(name)
    .then(
      recipe => this.recipes.push(recipe),
      error => this.errorMessage = <any>error);
  }

  gotoDetail(recipe: Recipe): void {
    this.router.navigate(['/detail', recipe.id ]);
  }
}
