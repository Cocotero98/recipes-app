import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe!: Recipe;
  id!: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private ruoter: Router
    ){}


    ngOnInit(): void {
      const id= this.route.params.subscribe((params: Params)=>{
       this.id = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.id)
      })      
    }
    onEditRecipe(){
      this.ruoter.navigate(['edit'], {relativeTo: this.route})
    }

    onDeleteRecipe(){
      this.recipeService.deleteRecipe(this.id);
      this.ruoter.navigate(['../'], {relativeTo: this.route});
    }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
