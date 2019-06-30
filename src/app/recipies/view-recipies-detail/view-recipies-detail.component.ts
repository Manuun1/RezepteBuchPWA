import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService, recipe,ingredient } from "src/app/data.service";

@Component({
  selector: "app-view-recipies-detail",
  templateUrl: "./view-recipies-detail.component.html",
  styleUrls: ["./view-recipies-detail.component.css"]
})
export class ViewRecipiesDetailComponent implements OnInit {
  //Using interface, exported in the data.service.ts
  recipe: recipe;
  recipe_ingredients:ingredient[];

  constructor(private router: Router, private dataservice:DataService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.recipe = this.router.getCurrentNavigation().extras.state.recipe;
      
      this.recipe_ingredients=dataservice.get_recipe_ingredients(this.recipe.ingredients);
    }
  }

  ngOnInit() {
    console.log(this.recipe.name);
  }

  routeToRecipeView() {
    this.router.navigate(["/"]);
  }
}
