import { Component, OnInit } from "@angular/core";
import { DataService, recipe } from "src/app/data.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-view-recipies",
  templateUrl: "./view-recipies.component.html",
  styleUrls: ["./view-recipies.component.css"]
})
export class ViewRecipiesComponent implements OnInit {
  recipies: recipe[] = [];

  constructor(
    private dataservice: DataService,
    private router: Router
    ) {}

  ngOnInit() {
    this.dataservice.get_recipies().subscribe(item => {
      item.forEach(element => {
        //Add this element to every image location, in order to keep the declaration in the dataservice lightweight
        element.image = "assets/images/" + element.image;
        this.recipies.push(element as recipe);
      });
    });
  }
  //Route to the detail view of a recipe => Show ingredients, cooking time, difficulty, ...
  routeToDetailView(recipe: any) {
    console.log(recipe);

    let navigationExtras: NavigationExtras = {
      state: {
        recipe: recipe
      }
    };
    this.router.navigate(["view_recipe_detail"], navigationExtras);
  }
}
