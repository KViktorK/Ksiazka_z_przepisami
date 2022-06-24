import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    //Dodawanie id recepta do routa 
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          //Pobierania pewnego receptu
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }
  //Dodawanie do listy zakopow
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  //Redagowanie recepta
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  //Usunięcia recepta
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
