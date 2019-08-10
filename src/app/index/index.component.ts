import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  basket_amount: number = 0;

  constructor(private dataservice: DataService, private router: Router) {}

  ngOnInit() {
    this.dataservice.get_BasketItemAmount().subscribe(value => {
      console.log(value);
      this.basket_amount = value;
    });
  }

  routeToRecipeView() {
    this.router.navigate(["/"]);
  }

  routeToAddRecipe() {
    this.router.navigate(["/add_recipe"]);
  }

  routeToBasketView() {
    this.router.navigate(["/view_basket"]);
  }
}
