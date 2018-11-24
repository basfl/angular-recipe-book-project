import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGard } from './auth/auth-guard-service';
import { RecipesModules } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth-module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModules,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule

  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGard],
  bootstrap: [AppComponent]
})
export class AppModule { }
