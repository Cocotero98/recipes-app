import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
    
    recipeSelected= new EventEmitter<Recipe>();
    
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
}