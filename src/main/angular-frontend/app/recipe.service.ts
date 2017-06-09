import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AppSettings }      from './app.settings';
import { Recipe }           from './recipe';
import { IngredientData }   from './recipe';


@Injectable ()
export class RecipeService {
  private recipesUrl = AppSettings.API_ENDPOINT + 'recipedata';  // URL to web API
  private deleteUrl = AppSettings.API_ENDPOINT + 'deleterecipe';
  private ingredientsUrl = AppSettings.API_ENDPOINT + 'ingredients';

  constructor (private http: Http) {}

  getRecipes () : Promise<Recipe[]> {
    return this.http.get(this.recipesUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  getRecipe( id: number) : Promise<Recipe> {
    return this.getRecipes()
      .then(recipes => recipes.find(recipe => recipe.id === id));
  }

  addRecipe (name: string) : Promise<Recipe> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.recipesUrl, { name }, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  getIngredients () : Promise<IngredientData[]> {
      return this.http.get(this.ingredientsUrl)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }

  deleteRecipe (id:number) : Promise<Recipe[]> {
    this.deleteUrl += '/' + id;
    return this.http.get(this.deleteUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  private extractData (res: Response) {
    let body = res.json();
    //console.log(res.json());
    return body;
    //return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}