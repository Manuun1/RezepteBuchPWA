import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import {
  IngredientsService,
  ingredient,
  ingredient_amount
} from "src/app/services/ingredients.service";
import {
  RecipiesService,
  recipe,
  difficulty
} from "src/app/services/recipies.service";

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
  difficulty:number;
  description = "";
  requiredTime = 0;

  filteredOptions: Observable<ingredient[]>;
  selected_ingredient="select an ingredient";

  selected_ingredients: ingredient_with_amount[] = [];
  anzahl: number;
  _difficulty="";

  error_code: string;

  new_recipe: recipe;

  //Displaying of the stepper
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
    this.selected_ingredient = ingredient.unit;
    console.log(this.selected_ingredient);
    return ingredient ? ingredient.name : undefined;
  }

  private _filter(name: string): ingredient[] {
    const filterValue = name.toLowerCase();
    return this.ingredients.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  //Add ingredient to the selected ingredients list in the second part of the stepper
  add_ingredient(zutat: any, anzahl: any) {

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

  set_difficulty(difficulty: any) {
    this.difficulty = difficulty.value;
    this._difficulty = difficulty.name;
    console.log(this.difficulty);
  }

  add_recipe() {
    //Custom ingredient list to add to the new recipe
    let ingredient_amount: ingredient_amount[] = [];
    let difficulty: difficulty;

    //+  is used to convert to number
    this.selected_ingredients.forEach(function(element) {
      ingredient_amount.push({ key: element.name, amount: +element.amount });
    });

    //Due to call by reference, getting the real value from the difficulty array
    difficulty = this.recipeService.get_difficulties_byValue(this.difficulty);

    //Create a new custom recipe to be added
    this.new_recipe = {
      name: this.recipeName,
      ingredients: ingredient_amount,
      required_time: this.requiredTime,
      description: this.description,
      difficulty: difficulty,
      image: this.recipeImageLink
    };

    //Send this new recipe to the dataservice 
    let response = this.recipeService.add_recipe(this.new_recipe);
    console.log("recipe was sent to dataservice");

    if (response == true) {
      console.log("adding was successful");

      //hide the stepper
      this.display_stepper = false;
      this.insert_successfull = true;
    }
  }

  routeToRecipeView() {
    this.router.navigate(["/"]);
  }
}
