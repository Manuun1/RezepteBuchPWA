import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { RecipiesService, recipe } from 'src/app/services/recipies.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  myControl = new FormControl();
  recipies: recipe[] = [];
  filteredOptions: Observable<recipe[]>;

  basket_amount: number = 0;

  constructor(
    private recipiesService: RecipiesService,
    private basketService: BasketService,
    private router: Router,
    private changedetectorref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.recipies = [];
    //Parsing the observable we got from the data.service.ts
    this.recipiesService.get_recipies().subscribe(item => {
      item.forEach(element => {
        this.recipies.push(element as recipe);
      });
    });
    this.refresh();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.recipies.slice()))
    );
  }

  index_search_detail_navigation(recipe:recipe){
    console.log(recipe);
  }


  displayFn(recipe?: recipe): string | undefined {
    return recipe ? recipe.name : undefined;
  }

  private _filter(name: string): recipe[] {
    const filterValue = name.toLowerCase();

    return this.recipies.filter(
      recipe => recipe.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  refresh() {
    this.basketService.get_BasketItemAmount().subscribe(value => {
      this.basket_amount = value;
    });
    this.changedetectorref.detectChanges();
  }

  routeToRecipeView() {
    this.router.navigate(["/"]);
  }

  routeToIngredientView() {
    this.router.navigate(["/view_ingredients"]);
  }

  routeToPageContact() {
    this.router.navigate(["/view_page_contact"]);
  }

  routeToAddRecipe() {
    this.router.navigate(["/add_recipe"]);
  }

  routeToBasketView() {
    this.router.navigate(["/view_basket"]);
  }
}
