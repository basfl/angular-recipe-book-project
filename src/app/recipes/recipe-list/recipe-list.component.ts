import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe("A test Recipe", "this is simply a test !!!!", "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F07%2Fmain%2Fshrimp_fried_rice_2525601_onean_0088.jpg%3Fitok%3DZz0mHMdR&w=700&q=85"),
  //   new Recipe("Another test Recipe", "this is simply a test !!!!", "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F07%2Fmain%2Fshrimp_fried_rice_2525601_onean_0088.jpg%3Fitok%3DZz0mHMdR&w=700&q=85")

 // ];
 recipes: Recipe[] ;
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipe()
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
