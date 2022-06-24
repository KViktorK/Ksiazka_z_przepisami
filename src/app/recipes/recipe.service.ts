import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];
  
  constructor(private shoppingService: ShoppingListService) {}
  //Zminana listy zakupów
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }
  //Pobieranie wszystkich receptow
  getRecipes() {
    return this.recipes;
  }
  //Pobierania pewnego receptu
  getRecipe(index: number) {
    return this.recipes[index];
  }
  //Dodawanie ingredientow do listy zakupow
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
 //Dodawanie receptu
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }
 //Redagowania receptu
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes);
  }
 //Usunięcia receptu
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }
}
