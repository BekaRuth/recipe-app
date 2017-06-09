import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe';
import { IngredientData } from './recipe';
import { RecipeService } from './recipe.service';

@Component ({
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

  constructor (private _recipeService: RecipeService, private route: ActivatedRoute){
    this.recipe = {
          id:null,
          name:'',
          description:'',
          image:'',
          ingredients:[],
          instructions:[''] };
  }

  ngOnInit (): void {
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


  /**
    * Returns a list of ingredients from the database
    */
  getIngredients () {
    this._recipeService.getIngredients()
      .then(ingredientData => this.ingredientData = ingredientData,
        error => this.errorMessage = <any>error);
  }

  /**
    * Adds a selection box for the user to enter in a new instruction
    */
  addNewStep () {
    this.recipe.instructions.push('');
  };

  /**
    * Removes last instruction for the recipe
    */
  removeLastStep () {
    var lastItem = this.recipe.instructions.length - 1;
    this.recipe.instructions.splice(lastItem);
  };

  /**
    * Creates initial list of ingredients to add to recipe in ingredients modal
    */
  setIngredientsToAdd () {
    for (var i = 0; i < this.recipe.ingredients.length; i++){
      this.ingredientsToAdd.push(this.recipe.ingredients[i]);
    }
  }

  /**
    * Takes ingredient and amount selected by user
    * and adds it to list of ingredients to add to the recipe
    */
  addIngredient (ingredientId:number, amount:any): void {
    for (var i = 0; i < this.ingredientData.length; i++) {
      if (ingredientId === this.ingredientData[i].id){
        this.ingredientsToAdd.push(amount + ' ' + this.ingredientData[i].name);
      }
    }
  }

  /**
    * Takes list of ingredients selected in ingredient modal and adds them to form
    */
  addIngredients () {
    this.recipe.ingredients = this.ingredientsToAdd;
  }
}