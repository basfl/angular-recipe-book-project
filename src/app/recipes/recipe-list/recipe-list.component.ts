import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  recipes: Recipe[];


  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
    this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    ); ////
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });


  }

}
