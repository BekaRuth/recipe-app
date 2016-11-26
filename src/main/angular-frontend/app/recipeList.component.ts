import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-recipe-list',
  templateUrl: 'recipeList.component.html',
  providers: [ RecipeService ],


})

export class RecipeListComponent implements OnInit {
  errorMessage: string;
  recipes: Recipe[];

  constructor (private recipeService: RecipeService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes()
    .subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error);
  }

  addRecipe (name:string) {
    if (!name) {return;}
    this.recipeService.addRecipe(name)
    .subscribe(
      recipe => this.recipes.push(recipe),
      error => this.errorMessage = <any>error);
  }
}