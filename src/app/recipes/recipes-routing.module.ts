import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGard } from "../auth/auth-guard-service";


const recipesRoute: Routes = [
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: "", component: RecipesStartComponent },
            { path: "new", component: RecipeEditComponent, canActivate: [AuthGard] },
            { path: ":id", component: RecipeDetailComponent },
            { path: ":id/edit", component: RecipeEditComponent, canActivate: [AuthGard] }
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(recipesRoute)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}