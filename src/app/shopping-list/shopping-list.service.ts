import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core"

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',2)
      ];

    onIngredientAdded(ingredient: Ingredient){
        this.ingredients.push(ingredient);
      }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient( ing: Ingredient){
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ing: Ingredient[]){
        this.ingredients.push(...ing);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}