import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { Recipe } from "./recipe.model";

import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: "root" })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private recipesService: RecipeService) {}

  resolve() {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length === 0) {
      return;
    } else {
      return recipes;
    }
  }
}
