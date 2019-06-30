import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface recipe {
  name: string;
  ingredients: string[] /*ingredient[]*/;
  required_time: number;
  description: string;
  difficulty: string; //enumeration;
  image: string;
}

export interface ingredient {
  name: string;
  unit: string;
  category: string;
}

export interface category {
  name: string;
}

const Categories: category[] = [
  {
    name: "Obst und Gemüse"
  }
];

//Using a Hashmap for the ingredients
const Ingredients = new Map([
  ["Banane", { unit: "pro Stück", category: "to be determined" }],
  ["Spinat", { unit: "pro Stück", category: "to be determined" }],
  ["Pasta", { unit: "pro Kilogram", category: "to be determined" }],
  ["Heidelbeeren", { unit: "pro Stück", category: "to be determined" }],
  ["Eier", { unit: "pro Stück", category: "to be determined" }],
  ["Mehl", { unit: "pro Stück", category: "to be determined" }],
  ["Sahne", { unit: "pro Stück", category: "to be determined" }],
  ["Zucker", { unit: "pro Stück", category: "to be determined" }],
  ["Tomaten", { unit: "pro Stück", category: "to be determined" }],
  ["Apfel", { unit: "pro Stück", category: "to be determined" }],
  ["Milch", { unit: "pro Stück", category: "to be determined" }],
  ["Orangen", { unit: "pro Stück", category: "to be determined" }],
  ["Gans", { unit: "pro Kilogram", category: "to be determined" }]
]);

const Recipies: recipe[] = [
  {
    name: "Pasta auf Spinat und Tomaten",
    ingredients: ["Banane","Pasta"],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "grüne-pasta.jpg"
  },
  {
    name: "Erdbeer Smoothie",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "strawberry_juice_jug.jpg"
  },
  {
    name: "Wildlachs auf Gemüse Garnitur",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "wildlachs.jpg"
  },
  {
    name: "Himbeer Fruchtporridge",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "Fruchtporridge.jpg"
  },
  {
    name: "Pancakes",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "himbeer_pancakes.jpg"
  },
  {
    name: "Weihnachtsgans",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "gans.jpg"
  },
  {
    name: "Hamburger mit Pommes",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "burger-pommes.jpg"
  },
  {
    name: "Schokoladeneis mit Blaubeer Garnitur",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "schokoladeneis-blaubeere.jpg"
  },
  {
    name: "Schinken Käse Sandwich",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "sandwich.jpg"
  },
  {
    name: "Gummibärchen",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "gummibärchen.jpg"
  },
  {
    name: "Gemischte Fruchtplatte",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "Fruchtplatte.jpg"
  },
  {
    name: "Zitronenrolle mit Früchte Garnitur",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "Zitronenrolle.jpg"
  },
  {
    name: "Paella mit Meeresfrüchten",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: "easy",
    image: "Paella.jpg"
  }
];

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  get_recipies(): Observable<recipe[]> {
    return of(Recipies);
  }

  //Get all ingredients from a specific recipe
  get_recipe_ingredients(ingredients: string[]) {

    //Aggregation of all ingredients of the selected recipe
    let ingredients_list:ingredient[] = [];
    let selected_ingredient;

    ingredients.forEach(function(element) {
      //Gathering the ingredient from the HashMap, using the key
      selected_ingredient = Ingredients.get(element);
      
      //Adding the full dataset to the aggregation of the ingredients
      ingredients_list.push({name:element,unit:selected_ingredient.unit,category:selected_ingredient.category});
    });
    //Returning the aggregation of all ingredients
    return ingredients_list;
  }

  //Get all ingredients, that are available in the data.service.ts
  get_allIngredients() {
    let ingredients: ingredient[] = [];

    Ingredients.forEach(function(key, value) {
      ingredients.push({ name: value, unit: key.unit, category: key.category } as ingredient);
    });

    return ingredients;
  }
}
