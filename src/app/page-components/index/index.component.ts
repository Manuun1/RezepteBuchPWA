import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router, NavigationExtras } from "@angular/router";
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
  //Enable Routing to a component by selecting an element in the search bar
  index_search_detail_navigation(recipe:recipe){
    console.log(recipe);
    let navigationExtras: NavigationExtras = {
      state: {
        recipe: recipe
      }
    };
    this.router.navigate(["view_recipe_detail"], navigationExtras);
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

  //Refresh the Material Badge attached to the "Einkaufswagen button"
  refresh() {
    //Get Count of elements in the basket
    this.basketService.get_BasketItemAmount().subscribe(value => {
      this.basket_amount = value;
    });
    this.changedetectorref.detectChanges();
  }

  //Route to a page on button click
  routeToRecipeView() {
    this.router.navigate(["/"]);
  }

  //Route to a page on button click
  routeToIngredientView() {
    this.router.navigate(["/view_ingredients"]);
  }

  //Route to a page on button click
  routeToPageContact() {
    this.router.navigate(["/view_page_contact"]);
  }

  //Route to a page on button click
  routeToAddRecipe() {
    this.router.navigate(["/add_recipe"]);
  }

  //Route to a page on button click
  routeToBasketView() {
    this.router.navigate(["/view_basket"]);
  }
}
