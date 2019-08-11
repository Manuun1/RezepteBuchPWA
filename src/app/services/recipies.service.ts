import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ingredient_amount } from "./ingredients.service";

export interface recipe {
  name: string;
  ingredients: ingredient_amount[];
  required_time: number;
  description: string;
  difficulty: difficulty;
  image: string;
}

export interface difficulty {
  name: string;
  value: number;
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
export class RecipiesService {
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
}
