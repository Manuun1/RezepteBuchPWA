import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { DataService, difficulty, ingredient } from "src/app/data.service";
import { Router } from "@angular/router";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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



    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.ingredients.slice())
      );
  }

  displayFn(user?: ingredient): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): ingredient[] {
    const filterValue = name.toLowerCase();

    return this.ingredients.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  add_recipe(selected_difficulty: number) {
    console.log(this.form_basics.value);
    console.log(selected_difficulty);

    console.log(this.form_ingredients.value);
  }
}
