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
  steps : Array<Object>;
  mode : string;
  myModel: any;


  constructor(private _recipeService: RecipeService, private route: ActivatedRoute){
    this.recipe = {id:null,
          name:'',
          description:'',
          image:'',
          ingredients:[''],
          instructions:[''] };
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.mode = 'Edit';
        let id = +params['id'];
        this._recipeService.getRecipe(id)
            .then(recipe => this.recipe = recipe);
      } else {
        this.mode = 'Create';
      }
    });
  }

  addNewStep() {
    var newItemNo = this.recipe.instructions.length + 1;
    this.recipe.instructions.push('');
  };

  removeStep() {
    var lastItem = this.recipe.instructions.length - 1;
    this.recipe.instructions.splice(lastItem);
  };
}