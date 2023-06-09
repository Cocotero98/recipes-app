import { Ingredient } from "../shared/ingredient.model"; 
import { Subject } from "rxjs"; 

export class ShoppingListService{
    startedEditing = new Subject<number>();
    ingredientsChanged = new Subject<Ingredient[]>();
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

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient( ing: Ingredient){
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ing: Ingredient[]){
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}