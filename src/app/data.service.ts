import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface recipe {
  name: string;
  ingredients: ingredient_amount[];
  required_time: number;
  description: string;
  difficulty: difficulty;
  image: string;
}

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

export interface difficulty {
  name: string;
  value: number;
}

export interface category {
  name: string;
}

const difficulties: difficulty[] = [
  {
    name: "kinderleicht",
    value: 0
  },
  {
    name: "einfach",
    value: 1
  },
  {
    name: "akzeptabel",
    value: 2
  },
  {
    name: "anspruchsvoll",
    value: 3
  },
  {
    name: "sehr anspruchsvoll",
    value: 4
  },
  {
    name: "wirklich schwierig",
    value: 5
  }
];

const categories: category[] = [
  {
    name: "Obst und Gemüse"
  }
];

const Basket: ingredient_amount[] = [
  { key: "Banane", amount: 2 },
  { key: "Gans", amount: 500 },
  { key: "Spinat", amount: 200 }
];

//Using a Hashmap for the ingredients
const Ingredients = new Map([
  ["Banane", { unit: "Stück", category: "to be determined" }],
  ["Spinat", { unit: "Gramm", category: "to be determined" }],
  ["Pasta", { unit: "Gramm", category: "to be determined" }],
  ["Heidelbeeren", { unit: "Gramm", category: "to be determined" }],
  ["Eier", { unit: "Stück", category: "to be determined" }],
  ["Mehl", { unit: "Gramm", category: "to be determined" }],
  ["Sahne", { unit: "Milliliter", category: "to be determined" }],
  ["Zucker", { unit: "Gramm", category: "to be determined" }],
  ["Tomaten", { unit: "Gramm", category: "to be determined" }],
  ["Apfel", { unit: "Stück", category: "to be determined" }],
  ["Milch", { unit: "Milliliter", category: "to be determined" }],
  ["Orangen", { unit: "Stück", category: "to be determined" }],
  ["Gans", { unit: "Gramm", category: "to be determined" }]
]);

const Recipies: recipe[] = [
  {
    name: "Pasta auf Spinat und Tomaten",
    ingredients: [
      { key: "Pasta", amount: 300 },
      { key: "Tomaten", amount: 200 },
      { key: "Spinat", amount: 200 }
    ],
    description:
      "Die Pasta in kochendem Salzwasser al dente kochen.\nInzwischen das Öl in einer Pfanne erhitzen, Spinat und Tomaten darin 2 - 3 Minuten anbraten.\nDie Pasta abtropfen lassen und zum Gemüse geben. Mit Salz und Pfeffer abschmecken, nach Belieben mit Parmesan bestreuen.",
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

  add_recipe(new_recipe: recipe): boolean {
    Recipies.push(new_recipe);
    console.log(new_recipe);

    return true;
  }

  get_difficulties(): difficulty[] {
    return difficulties;
  }

  get_difficulties_byValue(value: number): difficulty {
    let res: difficulty;
    difficulties.forEach(function(element) {
      if (element.value == value) {
        res = element;
      }
    });
    return res;
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

  //Get all ingredients, that are available in the data.service.ts
  get_allIngredients() {
    let ingredients: ingredient[] = [];

    Ingredients.forEach(function(key, value) {
      ingredients.push({
        name: value,
        unit: key.unit,
        category: key.category
      } as ingredient);
    });

    return ingredients;
  }

  get_allBasketItems(): Observable<any> {
    let res: any[] = [];
    let temp: any;

    Basket.forEach(function(element) {
      temp = Ingredients.get(element.key);

      res.push({
        name: element.key,
        amount: element.amount,
        category: temp.category,
        unit: temp.unit,
        //Button is used, to be able to add a delete button for each row in the basket table
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
    /*let Basket_length_Observable = new Observable(observer => {
      console.log("item");
      observer.next(Basket.length);
    });*/
    //return Basket_length_Observable;

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
