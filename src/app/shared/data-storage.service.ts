import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipe() {
   return  this.http.put("https://ng-recipe-book-1ef56.firebaseio.com/recipes.json", this.recipeService.getRecipes());
  }
  getRecipes() {
    this.http.get('https://ng-recipe-book-1ef56.firebaseio.com/recipes.json').pipe(
      map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
    )
      
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
