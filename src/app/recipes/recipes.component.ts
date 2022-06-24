import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
})
export class RecipesComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}

  fetchDB() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  ngOnInit() {
    this.fetchDB();
  }
}
