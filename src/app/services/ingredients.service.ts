import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface ingredient {
  name: string;
  unit: string;
  category: string;
}

export interface ingredient_amount {
  key: string;
  amount: number;
}

export interface ingredient_amount_unit {
  name: string;
  amount: number;
  unit: string;
  category: string;
}

const units = [
  "Gramm",
  "Milligramm",
  "Kilogramm",
  "Stück",
  "Liter",
  "Milliliter"
];

const categories: string[] = [
  "Getreide und Getreideprodukte",
  "Kartoffeln und Kartoffelprodukte",
  "Obst, Obsterzeugnisse und Trockenobst",
  "Gemüse und Hülsenfrüchte",
  "Nüsse und Samen",
  "Fleisch und Fleischwaren",
  "Fisch und Fischprodukte",
  "Milch und Milchprodukte",
  "Eier und Eierspeisen",
  "Öle und Fette",
  "Süßwaren und Zucker",
  "Konserven",
  "Fertiggerichte",
  "Saucen und Würzmittel",
  "Gewürze und Kräuter",
  "Alkoholfreie Getränke",
  "Alkoholhaltige Getränke"
];

const Ingredients = new Map([
  ["Banane", { unit: "Stück", category: categories[2] }],
  ["Spinat", { unit: "Gramm", category: categories[3] }],
  ["Pasta", { unit: "Gramm", category: categories[0] }],
  ["Heidelbeeren", { unit: "Gramm", category: categories[2] }],
  ["Eier", { unit: "Stück", category: categories[8] }],
  ["Mehl", { unit: "Gramm", category: categories[0] }],
  ["Sahne", { unit: "Milliliter", category: categories[7] }],
  ["Zucker", { unit: "Gramm", category: categories[10] }],
  ["Tomaten", { unit: "Gramm", category: categories[3] }],
  ["Brombeeren", { unit: "Gramm", category: categories[2] }],
  ["Johannisbeeren", { unit: "Gramm", category: categories[2] }],
  ["Apfel", { unit: "Stück", category: categories[2] }],
  ["Milch", { unit: "Milliliter", category: categories[7] }],
  ["Orangen", { unit: "Stück", category: categories[2] }],
  ["Wasser", { unit: "Milliliter", category: categories[15] }],
  ["Gans", { unit: "Gramm", category: categories[5] }],
  ["Wildlachs", { unit: "Gramm", category: categories[6] }],
  ["Möhre", { unit: "Gramm", category: categories[3] }],
  ["Fenchelknolle", { unit: "Stück", category: categories[3] }],
  ["Weißwein", { unit: "Milliliter", category: categories[16] }]
]);


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor() { }

  get_ingredients(){
    return Ingredients;
  }

  get_units(){
    return units;
  }

  get_ingredient_data(name: string): ingredient {
    let selected_ingredient = Ingredients.get(name);
    return {
      name: name,
      unit: selected_ingredient.unit,
      category: selected_ingredient.category
    };
  }

  //Get all ingredients from a specific recipe
  get_recipe_ingredients(ingredients: ingredient_amount[]) {
    //Aggregation of all ingredients of the selected recipe
    let ingredients_list: ingredient_amount_unit[] = [];
    let selected_ingredient;

    ingredients.forEach(function(element) {
      //Gathering the ingredient from the HashMap, using the key
      selected_ingredient = Ingredients.get(element.key);

      //Adding the full dataset to the aggregation of the ingredients
      ingredients_list.push({
        name: element.key,
        amount: element.amount,
        unit: selected_ingredient.unit,
        category: selected_ingredient.category
      });
    });
    //Returning the aggregation of all ingredients
    return ingredients_list;
  }

  get_allIngredients2DArray(): Observable<any> {
    let ingredients: any[] = [];

    //Generate a 2D array with the ingredients grouped by category
    Ingredients.forEach(function(value, key) {
      let found = false;
      //Traverse all entries in the Ingredient Hash Map
      ingredients.forEach(function(object) {
        //Check if the ingredient category already persists in the new 2d array
        if (object.key == value.category) {
          found = true;
        }
      });
      if (found == false) {
        let data: ingredient[] = [];
        //Gather all entries from the Ingredient Hash Map with the respective category.
        Ingredients.forEach(function(val, key_val) {
          //Manually replicating a join operation from SQL
          if (val.category == value.category) {
            data.push({
              name: key_val,
              unit: val.unit,
              category: val.category
            } as ingredient);
          }
        });
        ingredients.push({ key: value.category, data: data });
      }
    });
    return of(ingredients);
  }

  get_allIngredients1DArray(): Observable<any> {
    let ingredients: ingredient[] = [];
    Ingredients.forEach(function(value, key) {
      ingredients.push({
        name: key,
        unit: value.unit,
        category: value.category
      } as ingredient);
    });
    return of(ingredients);
  }

  add_ingredient(name:string, unit:string, category:string):boolean{

    console.log(name+"  "+unit+"  "+category+"  ")

    let category_reference:any;

    categories.forEach(function(elem){
      if(elem == category)
      {
        category_reference=elem;
      }
    })

    Ingredients.set(name,{ unit: unit, category: category_reference });
    
    return true;
  }
}
