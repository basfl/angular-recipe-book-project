import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChange=new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[] = [
        new Ingredient("apple", 5),
        new Ingredient("tomato", 10)
    ]
    getIngredient() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice())
    }
    addIngredients(ingredients:Ingredient[]){
        // for(let ing of ingredients){
        //     this.addIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChange.emit(this.ingredients.slice())
    }

}