import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe';
import { IngredientData } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-recipe-edit',
  templateUrl: 'editRecipe.component.html',
  providers: [ RecipeService ]
})

export class EditRecipeComponent implements OnInit {
  public recipe: Recipe;
  ingredientData: IngredientData[];
  steps : Array<Object>;
  mode : string;
  myModel: any;
  errorMessage: string;
  ingredientsToAdd: Array<any> = [];
  amount: string;

  constructor(private _recipeService: RecipeService, private route: ActivatedRoute){
    this.recipe = {
          id:null,
          name:'',
          description:'',
          image:'',
          ingredients:[''],
          instructions:[''] };
  }

  ngOnInit(): void {
    this.getIngredients();
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

  getIngredients(){
    this._recipeService.getIngredients()
      .then(ingredientData => this.ingredientData = ingredientData,
            error => this.errorMessage = <any>error);
  }

  addNewStep() {
    this.recipe.instructions.push('');
  };

  removeLastStep() {
    var lastItem = this.recipe.instructions.length - 1;
    this.recipe.instructions.splice(lastItem);
  };

  setIngredientsToAdd(){
    for (var i = 0; i < this.recipe.ingredients.length; i++){
      this.ingredientsToAdd.push(this.recipe.ingredients[i]);
    }
    console.log('setIngredientsToAdd');
    console.log(this.recipe.ingredients);
    console.log(this.ingredientsToAdd);
  }

  addIngredient(ingredientId:number, amount:any): void {
    for (var i = 0; i < this.ingredientData.length; i++) {
      if (ingredientId === this.ingredientData[i].id){
        this.ingredientsToAdd.push(amount + ' ' + this.ingredientData[i].name);
      }
    }
    console.log('addIngredient');
    console.log(this.recipe.ingredients);
    console.log(this.ingredientsToAdd);
  }

  addIngredients(){
    this.recipe.ingredients = this.ingredientsToAdd;
    // for (var i = 0; i < this.ingredientsToAdd.length; i++) {
    //   this.recipe.ingredients.push(this.ingredientsToAdd[i]);
    // }
    // console.log('addIngredients');
    // console.log(this.recipe.ingredients);
    // console.log(this.ingredientsToAdd);
  }
}