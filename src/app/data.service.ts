import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface recipe {
  name: string;
  ingredients: string[];
  required_time: number;
  description: string;
  difficulty: string;//enumeration;
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

const Recipies: recipe[] = [
  {
    name: "Pasta auf Spinat und Tomaten",
    ingredients: [],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "grüne-pasta.jpg"
  },
  {
    name: "Erdbeer Smoothie",
    ingredients: [],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "strawberry_juice_jug.jpg"
  },
  {
    name: "Wildlachs auf Gemüse Garnitur",
    ingredients: [],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "wildlachs.jpg"
  },
  {
    name: "Himbeer Fruchtporridge",
    ingredients: [],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "Fruchtporridge.jpg"
  },
  {
    name: "Pancakes",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "himbeer_pancakes.jpg"
  },
  {
    name: "Weihnachtsgans",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "gans.jpg"
  },
  {
    name: "Hamburger mit Pommes",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "burger-pommes.jpg"
  },
  {
    name: "Schokoladeneis mit Blaubeer Garnitur",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "schokoladeneis-blaubeere.jpg"
  },
  {
    name: "Schinken Käse Sandwich",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "sandwich.jpg"
  },
  {
    name: "Gummibärchen",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "gummibärchen.jpg"
  },
  {
    name: "Gemischte Fruchtplatte",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "Fruchtplatte.jpg"
  },
  {
    name: "Zitronenrolle mit Früchte Garnitur",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "Zitronenrolle.jpg"
  },
  {
    name: "Paella mit Meeresfrüchten",
    ingredients: ["Banane"],
    description:"to be added",
    required_time:20,
    difficulty: "easy",
    image: "Paella.jpg"
  }
];

const Ingredients: ingredient[] = [
  {
    name: "Banane",
    unit: "Stück",
    category: "Testkategorie"
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
}
