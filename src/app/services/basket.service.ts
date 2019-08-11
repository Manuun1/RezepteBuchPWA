import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ingredient_amount, IngredientsService } from "./ingredients.service";
import { recipe } from "./recipies.service";

const Basket: ingredient_amount[] = [
  { key: "Banane", amount: 2 },
  { key: "Gans", amount: 500 },
  { key: "Spinat", amount: 200 }
];

@Injectable({
  providedIn: "root"
})
export class BasketService {
  constructor(private ingredientsService: IngredientsService) {}

  get_allBasketItems(): Observable<any> {
    //Specify a response array
    let res: any[] = [];

    //Gather HashMap of Ingredients from IngredientsService
    let Ingredients = this.ingredientsService.get_ingredients();

    let tempIngredient: any;

    Basket.forEach(function(element) {
      tempIngredient = Ingredients.get(element.key);

      res.push({
        name: element.key,
        amount: element.amount,
        category: tempIngredient.category,
        unit: tempIngredient.unit,
        //Button is used, to be able to add a delete and edit button for each row in the basket table
        button: ""
      });
    });

    return of(res);
  }

  delete_BasketItem(itemName: string): boolean {
    let status = false;
    console.log(itemName);

    for (let i = 0; i < Basket.length; i++) {
      console.log(Basket[i].key);

      if (Basket[i].key == itemName) {
        console.log("found");
        Basket.splice(i, 1);
        status = true;
        break;
      }
    }
    return status;
  }

  get_BasketItemAmount(): Observable<any> {
    return of(Basket.length);
  }

  ingredients_addToBasket(recipe: recipe) {
    console.log(recipe);
    let found: boolean = false;
    let found_element: any;

    recipe.ingredients.forEach(function(ingredient) {
      found = false;

      Basket.forEach(function(element) {
        if (ingredient.key == element.key) {
          found = true;
          found_element = element;
        }
      });
      if (found == false) {
        Basket.push({ key: ingredient.key, amount: ingredient.amount });
      } else {
        found_element.amount += ingredient.amount;
      }
    });
  }
}
