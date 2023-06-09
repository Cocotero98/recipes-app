import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes!: Recipe [];
  subscription!: Subscription;

  constructor(private recipesService: RecipeService,
              private router: Router,
              private route: ActivatedRoute

    ){

  }

  ngOnInit(){
    this.recipes = this.recipesService.getRecipes();
    this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[])=>{
        this.recipes = recipes;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
