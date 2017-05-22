import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-recipe-edit',
  templateUrl: 'editRecipe.component.html',
  providers: [ RecipeService ]
})

export class EditRecipeComponent implements OnInit {
  public recipe: Recipe;
  navigated = false;
  steps : Array<Object>;
  mode : string;

  constructor(private _recipeService: RecipeService, private route: ActivatedRoute){
    this.steps = [{ id: '1' }, { id: '2' }];
  }

  addNewStep() {
    var newItemNo = this.steps.length + 1;
    this.steps.push({ 'id': newItemNo });
  };

  removeStep() {
    var lastItem = this.steps.length - 1;
    this.steps.splice(lastItem);
  };

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.mode = 'Edit';
        let id = +params['id'];
        this.navigated = true;
        this._recipeService.getRecipe(id)
            .then(recipe => this.recipe = recipe);
      } else {
        this.mode = 'Create';
        this.navigated = false;
      }
    });
  }
}