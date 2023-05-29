import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  currentRecipe!:Recipe;

  constructor(private recipesService: RecipeService){

  }

  onRecipeSelected(recipe:any){
    this.currentRecipe = recipe;
  }

  ngOnInit(){
    this.recipesService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.currentRecipe = recipe;
        }
      )
  }

}
