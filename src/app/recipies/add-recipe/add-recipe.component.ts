import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { DataService, difficulty, ingredient,recipe, ingredient_amount } from "src/app/data.service";
import { Router } from "@angular/router";
import { Observable, empty } from "rxjs";
import { map, startWith } from "rxjs/operators";

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
  isLinear = false;
  form_basics: FormGroup;
  form_ingredients: FormGroup;
  form_thirdFormGroup: FormGroup;

  difficulties: difficulty[];
  ingredients: ingredient[];

  myControl = new FormControl();
  filteredOptions: Observable<ingredient[]>;
  selected_ingredients: ingredient_with_amount[] = [];
  anzahl:number;

  error_code:string;

  new_recipe:recipe;

  display_stepper:boolean = true;
  insert_successfull:boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private dataservice: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.difficulties = this.dataservice.get_difficulties();
    this.ingredients = this.dataservice.get_allIngredients();

    this.form_basics = this._formBuilder.group({
      Rezeptname: ["", Validators.required]
    });
    this.form_ingredients = this._formBuilder.group({});
    this.form_thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required]
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.ingredients.slice()))
    );
  }

  displayFn(ingredient?: ingredient): string | undefined {
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
      this.error_code="";
      this.selected_ingredients.forEach(function(element) {
        if (element.name == zutat) {
          found = true;
        }
      });
      if (found == false) {
        this.selected_ingredients.push({
          name: zutat,
          amount: anzahl,
          unit: this.dataservice.get_ingredient_data(zutat).unit
        });
      }
    }
    else{
      this.error_code = "Bitte sowohl eine Zutat als auch eine Anzahl angeben.";
    }
  }

  generate_recipe_summary(){
    console.log("Recipe summary");
    this.selected_ingredients.forEach(function(element){
      //this.recipe_summary+=element.
    })
  }

  add_recipe(recipe_name:string,selected_difficulty: number,description:string,duration:number) {

    let ingredient_amount:ingredient_amount[] = [];
    let difficulty:difficulty;

    this.selected_ingredients.forEach(function(element){
      ingredient_amount.push({key:element.name,amount:element.amount});
    })

    console.log("Starting");

    difficulty = this.dataservice.get_difficulties_byValue(selected_difficulty);
    console.log(difficulty);
    
    if(difficulty!=null)
    {
      console.log("Difficulty worked");
      this.new_recipe = {
        name:recipe_name,
        ingredients:  ingredient_amount,
        required_time: duration,
        description:description,
        difficulty:difficulty,
        image:"schokotörtchen.jpg"
      }
      let response = this.dataservice.add_recipe(this.new_recipe);
      console.log("recipe was added");
      
      if(response == true)
      {
        console.log("recponse was true");
        
        this.display_stepper=false;
        this.insert_successfull=true;
      }
    }
  }

  routeToRecipeView(){
    this.router.navigate(["/"]);
  }
}
