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
    
    private recipes: Recipe[]= [
        new Recipe(
          'Spaghetti', 
          'I am testing the Recipe model', 
          'https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg',
          [
            new Ingredient('Pasta',1),
            new Ingredient('Sauce', 1)
          ]),
        new Recipe(
          'Spaghetti 2', 
          'I am testing the Recipe model', 
          'https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg',
          [
            new Ingredient('Ravioli',1),
            new Ingredient('Sauce', 1)
          ])
      ];

      constructor(private SLService: ShoppingListService){}

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