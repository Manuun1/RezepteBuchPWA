import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IngredientsService, ingredient } from 'src/app/services/ingredients.service';
import { BasketService } from 'src/app/services/basket.service';
import {recipe} from 'src/app/services/recipies.service';

export interface testing {
  name: string;
  unit: string;
  amount: number;
  id: string;
}

@Component({
  selector: "app-view-recipies-detail",
  templateUrl: "./view-recipies-detail.component.html",
  styleUrls: ["./view-recipies-detail.component.css"]
})
export class ViewRecipiesDetailComponent implements OnInit {
  //Using interface, exported in the data.service.ts
  recipe: recipe;
  recipe_ingredients: ingredient[];
  show_ingredients_added: boolean = false;
  amount_ingredients_added: number = 0;

  constructor(private router: Router, private ingredientService: IngredientsService, private basketService: BasketService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.recipe = this.router.getCurrentNavigation().extras.state.recipe;

      this.recipe_ingredients = ingredientService.get_recipe_ingredients(
        this.recipe.ingredients
      );
    }
  }

  ngOnInit() {
    if(this.recipe== undefined)
    {
      this.router.navigate(["/"]);
    }
  }

  routeToRecipeView() {
    this.router.navigate(["/"]);
  }

  ingredientsAddToBasket() {
    this.basketService.ingredients_addToBasket(this.recipe);
    this.show_ingredients_added = true;
    this.amount_ingredients_added += 1;
  }
}
