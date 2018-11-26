import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';


@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipe() {
    const token = this.authService.getToken();
    // return this.httpClient.put("https://ng-recipe-book-1ef56.firebaseio.com/recipes.json", this.recipeService.getRecipes(),{
    //   observe:'body',
    //   params:new HttpParams().set('auth',token)
    // });
    // const req = new HttpRequest("PUT", "https://ng-recipe-book-1ef56.firebaseio.com/recipes.json", this.recipeService.getRecipes(), {
    //   reportProgress: true,
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest("PUT", "https://ng-recipe-book-1ef56.firebaseio.com/recipes.json", this.recipeService.getRecipes(), {
      reportProgress: true,
    });
    return this.httpClient.request(req);
  }
  getRecipes() {
    const token = this.authService.getToken();
    // this.http.get('https://ng-recipe-book-1ef56.firebaseio.com/recipes.json?auth=' + token).pipe(
    //   map(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       for (let recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    // )

    //   .subscribe(
    //     (recipes: Recipe[]) => {
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );
   // this.httpClient.get<Recipe[]>('https://ng-recipe-book-1ef56.firebaseio.com/recipes.json?auth=' + token,
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-1ef56.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    }).pipe(
      map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;

        }
      )
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }

    );
  }
}
