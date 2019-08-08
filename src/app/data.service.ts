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

const Basket: ingredient_amount[] = [
  { key: "Banane", amount: 2 },
  { key: "Gans", amount: 500 },
  { key: "Spinat", amount: 200 }
];

const Units = [
  "Gramm",
  "Milligramm",
  "Kilogramm",
  "Stück",
  "Liter",
  "Milliliter"
];

//Using a Hashmap for the ingredients
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
    name: "Frozen Berry Drink",
    ingredients: [
      { key: "Heidelbeeren", amount: 50 },
      { key: "Wasser", amount: 200 },
      { key: "Brombeeren", amount: 50 },
      { key: "Johannisbeeren", amount: 50 }
    ],
    description:
      "Über Nacht Wasser im Gefrierfach zu Eis gefrieren lassen. Daraus dann Crushed Ice machen.\nHeidelbeeren Brombeeren und Johannisbeeren zusammen in eine Schüssel geben und zermahlen.\nDanach alles in einen Mixer mit dem Wasser geben. In einem Glas servieren und mit dem Chrused Ice auffüllen.\nWahlweise mit einer Zitrone und einer Zimtstange dekorieren.",
    required_time: 10,
    difficulty: difficulties[0],
    image: "strawberry_juice_jug.jpg"
  },
  {
    name: "Wildlachs auf Fenchel Gemüse Garnitur",
    ingredients: [
      { key: "Wildlachs", amount: 250 },
      { key: "Möhre", amount: 50 },
      { key: "Fenchelknolle", amount: 1 },
      { key: "Orangen", amount: 100 },
      { key: "Weißwein", amount: 100 }
    ],
    description:
      "Die Möhren und den Fenchel klein würfeln. Zwiebel und Knoblauch in feine Streifen schneiden. Die Butter in einer Pfanne mit Deckel erhitzen, das Gemüse ca. 5 Minuten bissfest dünsten.\nIn der Zwischenzeit die Orange filetieren, die Trennhäute ausdrücken und den Saft auffangen. Den Zucker zum Gemüse geben, kurz karamellisieren, salzen, pfeffern und mit dem Orangensaft und Wein ablöschen.\nDen Lachs in zwei gleichgroße Steaks teilen und mit etwas Salz und Pfeffer würzen. Auf das Gemüse legen und den Deckel auf die Pfanne setzen. Bei mittlerer Hitze ca. 5 Min. dünsten. Dann den Dill hinzufügen, weitere 5 Minuten in der geschlossenen Pfanne dünsten.\nDen Lachs aus der Pfanne nehmen, auf zwei Tellern anrichten. Das Gemüse evtl. noch einmal mit Salz und Pfeffer abschmecken, anrichten.\nDazu passen Bandnudeln, Baguette oder Reis, aber eigentlich braucht man keine zusätzliche Sättigungsbeilage. ",
    required_time: 60,
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
