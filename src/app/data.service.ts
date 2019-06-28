import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface recipe {
  name: string;
  ingredients: string[];
  picture: string;
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
    name: "Linsensuppe",
    ingredients: [],
    picture: "picture"
  },
  {
    name: "Wiener Schnitzel",
    ingredients: [],
    picture: "picture"
  },
  {
    name: "Wiener Schnitzel",
    ingredients: [],
    picture: "picture"
  },
  {
    name: "Wiener Schnitzel",
    ingredients: [],
    picture: "picture"
  },
  {
    name: "Wiener Schnitzel",
    ingredients: ["Banane"],
    picture: "picture"
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
