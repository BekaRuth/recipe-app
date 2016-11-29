import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-recipe-detail',
  templateUrl: 'recipeDetail.component.html',
  inputs: ['recipe'],
  providers: [ RecipeService ]
})

export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;
  navigated = false;

  constructor(private _recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this._recipeService.getRecipe(id)
            .then(recipe => this.recipe = recipe);
      } else {
        this.navigated = false;
      }
    });
  }
}