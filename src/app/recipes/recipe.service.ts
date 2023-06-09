import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    recipeSelected!: Recipe;
    
    private recipes: Recipe[]= [];

      constructor(private SLService: ShoppingListService){}

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
      }

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ing: Ingredient[]){
        this.SLService.addIngredientsFromRecipe(ing);
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }

}