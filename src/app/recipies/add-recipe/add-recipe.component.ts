import { Component, OnInit } from "@angular/core";
import {FormGroup,FormBuilder,Validators,FormControl} from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { IngredientsService,ingredient, ingredient_amount } from 'src/app/services/ingredients.service';
import { RecipiesService, recipe, difficulty } from 'src/app/services/recipies.service';

export interface ingredient_with_amount {
  name: string;
  amount: number;
  unit: string;
}

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.css"]
})
export class AddRecipeComponent implements OnInit {
  myControl = new FormControl();
  isLinear = false;

  //Form Controls
  form_basics: FormGroup;
  form_ingredients: FormGroup;
  form_thirdFormGroup: FormGroup;

  //Caching Data from DataService
  difficulties: difficulty[];
  ingredients: ingredient[];

  //Two Way Binding Variables
  Zutat: any;
  recipeName = "";
  recipeImageLink = "";
  difficulty:any;
  description = "";
  requiredTime = 0;

  filteredOptions: Observable<ingredient[]>;
  selected_ingredient: ingredient = {
    name: "select an ingredient",
    unit: "select an ingredient",
    category: "select an ingredient"
  };

  selected_ingredients: ingredient_with_amount[] = [];
  anzahl: number;

  error_code: string;

  new_recipe: recipe;

  display_stepper: boolean = true;
  insert_successfull: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private ingredientsService: IngredientsService,
    private recipeService: RecipiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.difficulties = this.recipeService.get_difficulties();
    this.ingredientsService
      .get_allIngredients1DArray()
      .subscribe(item => (this.ingredients = item));

    this.form_basics = this._formBuilder.group({
      recipeName: ["", Validators.required],
      difficulty: ["", Validators.required],
      recipeImageLink: ["", Validators.required]
    });
    this.form_ingredients = this._formBuilder.group({});
    this.form_thirdFormGroup = this._formBuilder.group({
      description: ["", Validators.required],
      requiredTime: ["", Validators.required]
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.ingredients.slice()))
    );
  }

  displayFn(ingredient?: ingredient): string | undefined {
    this.selected_ingredient = ingredient;
    console.log(this.difficulties);
    return ingredient ? ingredient.name : undefined;
  }

  private _filter(name: string): ingredient[] {
    const filterValue = name.toLowerCase();
    return this.ingredients.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  add_ingredient(zutat: any, anzahl: any) {
    console.log(this.anzahl);

    let found: boolean = false;

    if (zutat != "" && anzahl / 2 != 0) {
      this.error_code = "";
      this.selected_ingredients.forEach(function(element) {
        if (element.name == zutat) {
          found = true;
        }
      });
      if (found == false) {
        this.selected_ingredients.push({
          name: zutat,
          amount: anzahl,
          unit: this.ingredientsService.get_ingredient_data(zutat).unit
        });
      }
    } else {
      this.error_code = "Bitte sowohl eine Zutat als auch eine Anzahl angeben.";
    }
  }

  add_recipe() {
    let ingredient_amount: ingredient_amount[] = [];
    let difficulty: difficulty;

    this.selected_ingredients.forEach(function(element) {
      ingredient_amount.push({ key: element.name, amount: +element.amount });
    });

    console.log(this.difficulty);
    console.log(this.recipeName);

    difficulty = this.recipeService.get_difficulties_byValue(this.difficulty);
    console.log(difficulty);

    if (difficulty != null) {
      this.new_recipe = {
        name: this.recipeName,
        ingredients: ingredient_amount,
        required_time: this.requiredTime,
        description: this.description,
        difficulty: difficulty,
        image: this.recipeImageLink
      };
      let response = this.recipeService.add_recipe(this.new_recipe);
      console.log("recipe was added");

      if (response == true) {
        console.log("adding was successful");

        this.display_stepper = false;
        this.insert_successfull = true;
      }
    }
  }

  routeToRecipeView() {
    this.router.navigate(["/"]);
  }
}
