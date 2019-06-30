import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface recipe {
  name: string;
  ingredients: ingredient_amount[] /*ingredient[]*/;
  required_time: number;
  description: string;
  difficulty: difficulty; //enumeration;
  image: string;
}

export interface ingredient {
  name: string;
  unit: string;
  category: string;
}

export interface ingredient_amount{
  key:string
  amount:number
}

export interface difficulty {
  name: string;
  value:number;
}

export interface category {
  name: string;
}

const difficulties: difficulty[] = [
  {
    name:"kinderleicht",
    value:0
  },
  {
    name:"einfach",
    value:1
  },
  {
    name:"akzeptabel",
    value:2
  },
  {
    name:"anspruchsvoll",
    value:3
  },
  {
    name:"sehr anspruchsvoll",
    value:4
  },
  {
    name:"wirklich schwierig",
    value:5
  }
];

const categories: category[] = [
  {
    name: "Obst und Gemüse"
  }
];

//Using a Hashmap for the ingredients
const Ingredients = new Map([
  ["Banane", { unit: "Stück", category: "to be determined" }],
  ["Spinat", { unit: "Stück", category: "to be determined" }],
  ["Pasta", { unit: "Kilogram", category: "to be determined" }],
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
    ingredients: [{key:"Banane",amount:3},{key:"Pasta",amount:1}],
    description: "Die Pasta in kochendem Salzwasser al dente kochen.\nInzwischen das Öl in einer Pfanne erhitzen, Spinat und Tomaten darin 2 - 3 Minuten anbraten.\nDie Pasta abtropfen lassen und zum Gemüse geben. Mit Salz und Pfeffer abschmecken, nach Belieben mit Parmesan bestreuen.",
    required_time: 20,
    difficulty: difficulties[1],
    image: "grüne-pasta.jpg"
  },
  {
    name: "Erdbeer Smoothie",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[0],
    image: "strawberry_juice_jug.jpg"
  },
  {
    name: "Wildlachs auf Gemüse Garnitur",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "wildlachs.jpg"
  },
  {
    name: "Himbeer Fruchtporridge",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "Fruchtporridge.jpg"
  },
  {
    name: "Pancakes",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "himbeer_pancakes.jpg"
  },
  {
    name: "Weihnachtsgans",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "gans.jpg"
  },
  {
    name: "Hamburger mit Pommes",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "burger-pommes.jpg"
  },
  {
    name: "Schokoladeneis mit Blaubeer Garnitur",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "schokoladeneis-blaubeere.jpg"
  },
  {
    name: "Schinken Käse Sandwich",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "sandwich.jpg"
  },
  {
    name: "Gummibärchen",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "gummibärchen.jpg"
  },
  {
    name: "Gemischte Fruchtplatte",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "Fruchtplatte.jpg"
  },
  {
    name: "Zitronenrolle mit Früchte Garnitur",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
    image: "Zitronenrolle.jpg"
  },
  {
    name: "Paella mit Meeresfrüchten",
    ingredients: [],
    description: "to be added",
    required_time: 20,
    difficulty: difficulties[2],
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

  get_difficulties(): difficulty[]{
    return difficulties;
  }

  //Get all ingredients from a specific recipe
  get_recipe_ingredients(ingredients: ingredient_amount[]) {

    //Aggregation of all ingredients of the selected recipe
    let ingredients_list:ingredient[] = [];
    let selected_ingredient;

    ingredients.forEach(function(element) {
      //Gathering the ingredient from the HashMap, using the key
      selected_ingredient = Ingredients.get(element.key);
      
      //Adding the full dataset to the aggregation of the ingredients
      ingredients_list.push({name:element.key,unit:selected_ingredient.unit,category:selected_ingredient.category});
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
